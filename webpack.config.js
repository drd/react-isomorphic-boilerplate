var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        vendor: ['webpack-dev-server/client?http://localhost:3000',
                 'webpack/hot/dev-server',
                 'react',
                 'react-router'],
        app: './client.jsx'
    },
    output: {
        filename: 'client.js',
        path: __dirname + '/dist',
        publicPath: '/js'
    },
    devtool: 'eval',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    server: {
	port: 3000
    },
    resolve: {
        // Look directly in app dir for modules
        root: __dirname + '/app',
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['6to5?sourceMap&experimental'] },
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['6to5?sourceMap&experimental', 'react-hot', 'jsx'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
