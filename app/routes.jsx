var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app';
import Page1 from './page1';
import Page2 from './page2';


var Routes = (
    <Route name="App" handler={App} path="/">
        <Route name="page-1" handler={Page1}/>
        <Route name="page-2" handler={Page2}/>
    </Route>
);



export default Routes;
