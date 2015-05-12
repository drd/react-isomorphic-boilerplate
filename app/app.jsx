let React = require('react');
import {Link, RouteHandler} from 'react-router';

var App = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1>Scammer Hammer</h1>
                </section>
                <section id="content">
                    <RouteHandler {...this.props} />
                </section>
            </div>
        );
    }
});


export default App;
