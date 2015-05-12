var React = require('react');


var Base = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>your awesome application</title>
                    <meta charset="utf-8" />
                    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
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
