var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app';
import Cluster from './cluster';
import Clusters from './clusters';


var Routes = (
    <Route name="App" handler={App}>
        <Route name="index" path="/" handler={Clusters}>
            <Route name="cluster" path="cluster/:id" handler={Cluster}/>
        </Route>
    </Route>
);


export default Routes;
