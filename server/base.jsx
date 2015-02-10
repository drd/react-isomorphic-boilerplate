var React = require('react');


var Base = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>compassing.net</title>
                    <link href="http://fonts.googleapis.com/css?family=Crimson+Text:400,400italic" rel="stylesheet" type="text/css"/>
                </head>
                <body>
                    <div id="all" dangerouslySetInnerHTML={{__html: this.props.markup}}/>
                    <script dangerouslySetInnerHTML={{__html: this.props.data}}></script>
                    <script src="/js/vendor.js"></script>
                    <script src="/js/client.js"></script>
                </body>
            </html>
        );
    }
});


export default Base;
