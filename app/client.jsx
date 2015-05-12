var _ = require('underscore');
var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

import model from './model';

import clusters from '../data/clusters';


require('css/site.css');

start();



function start() {
    Router.run(Routes, Router.HistoryLocation, (Handler) => {
        React.render(<Handler clusters={clusters}/>, document.getElementById('all'));
    });
}
