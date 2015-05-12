var chalk = require('chalk');
var webpack = require('webpack');


var environments = {
    production: {
        vendor: ['react', 'react-router'],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                minChunks: Infinity
            })
        ]
    },

    development: {
        vendor: ['webpack-dev-server/client?http://localhost:3000',
                 'webpack/hot/dev-server',
                 'react',
                 'react-router'],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                minChunks: Infinity
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    }
};


module.exports = {
    context: __dirname + '/app',
    entry: {
        // output 2 bundles of javascript, one for vendor, one for application
        vendor: env('vendor'),
        app: './client.jsx'
    },
    output: {
        filename: 'client.js',
        path: __dirname + '/dist',
        publicPath: '/js'
    },
    devtool: 'eval',
    plugins: env('plugins'),
    resolve: {
        // Look directly in app dir for modules
        root: __dirname + '/app',
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?sourceMap&stage=1&optional=runtime'] },
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['react-hot', 'babel?sourceMap&stage=1&optional=runtime', 'jsx'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}


function env(key) {
    var result = undefined;
    try {
        var env = process.env.NODE_ENV || 'development';
        result = environments[env][key];
        if (result === undefined) {
            console.warn(chalk.yellow('Undefined environment key', key, ' in ', env));
        }
        return result;
    } catch(e) {
        console.error(chalk.red('Exception occurred retrieving environment config key', key, ' in ', env));
        console.error(e.stack);
        process.exit(1);
    }
}
