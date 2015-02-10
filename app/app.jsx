let React = require('react');
import {Link, RouteHandler} from 'react-router';


var App = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1>welcome</h1>
                </section>
                <nav>
                    <ul>
                        <li><Link to="page-1">Page 1</Link></li>
                        <li><Link to="page-2">Page 2</Link></li>
                    </ul>
                </nav>
                <section id="content">
                    <RouteHandler posts={this.props.data}/>
                </section>
            </div>
        );
    }
});


export default App;
