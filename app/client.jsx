var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

require('css/site.css');

start();

function start() {
    Router.run(Routes, Router.HistoryLocation, (Handler) => {
        var Data = { Resolve: () => window.__data__ };
        var data = Data.Resolve();
        React.render(<Handler {...data}/>, document.getElementById('all'));
    });
}
