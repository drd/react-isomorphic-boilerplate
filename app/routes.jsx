var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app';
import Cluster from './cluster';
import Clusters from './clusters';


class Choose extends React.Component {
    render() {
        return <h3>Please choose a group of messages</h3>;
    }
}

var Routes = (
    <Route name="App" handler={App}>
        <Route name="index" path="/" handler={Clusters}>
            <DefaultRoute handler={Choose}/>
            <Route name="cluster" path="cluster/:id" handler={Cluster}/>
        </Route>
    </Route>
);


export default Routes;
