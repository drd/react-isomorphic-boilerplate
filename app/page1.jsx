let React = require('react');

// you can use the traditional React.createClass technique for components
var Page1 = React.createClass({
    getInitialState: function() {
        return {counter: 0};
    },

    componentDidMount: function() {
        this._timer = setInterval(() => this.setState({counter: ++this.state.counter}), 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this._timer);
        delete this._timer;
    },

    render: function() {
        return (
            <div>
                <h2>Page 1</h2>
                <p>Welcome to the first page of this website, and, obviously, the best.</p>
                <p>It's been {this.state.counter} seconds since this page loaded.</p>
            </div>
        );
    }
});


export default Page1;
