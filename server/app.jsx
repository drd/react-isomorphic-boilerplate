var _ = require('underscore');
var chalk = require('chalk');

var React = require('react');
var Router = require('react-router');
var saferStringify = require('safer-stringify');

var Base = require('./base');
var Routes = require('../app/routes');

var clusters = require("../data/clusters");


function globalScriptAssignment(name, value) {
    return `window.${name} = ${saferStringify(value)}`;
}


function handleRequest(req, res, next) {
    // Resolve the current route using `req.path`
    Router.run(Routes, req.path, async (Handler, state) => {
        try {
            // you might want to gather your (potentially nested) data dependencies
            // here, by iterating over the state array.
            let data = clusters;

            // generate the hydrateable application markup
            var appMarkup = React.renderToString(<Handler clusters={data}/>);

            // and insert it into the HTML layout
            var markup = React.renderToStaticMarkup(
                <Base data={globalScriptAssignment('__data__', data)} markup={appMarkup} />
            )
            res.set({'content-type': 'text/html; charset=utf-8'});
            res.end(markup);
        } catch(e) {
            console.error(chalk.red(e.message));
            console.error(chalk.red(e.stack));

            res.status(500).send(
                `<h1>${e.message}</h1>
                <pre>${e.stack}</pre>`
            );
        }
    });
}


export default handleRequest;
