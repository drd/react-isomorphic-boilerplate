var React = require('react');


var Base = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>your awesome application</title>
                </head>
                <body>
                    <div id="all" dangerouslySetInnerHTML={{__html: this.props.markup}}/>
                    <script dangerouslySetInnerHTML={{__html: this.props.data}}></script>
                    {/* any bundles specified in webpack.config.js must be added here in proper order */}
                    <script src="/js/vendor.js"></script>
                    <script src="/js/client.js"></script>
                </body>
            </html>
        );
    }
});


export default Base;
