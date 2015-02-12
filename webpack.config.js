var chalk = require('chalk');
var webpack = require('webpack');


module.exports = {
    context: __dirname + '/app',
    entry: {
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
            { test: /\.js$/, exclude: /node_modules/, loaders: ['6to5?sourceMap&experimental'] },
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['react-hot', '6to5?sourceMap&experimental', 'jsx'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}


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


function env(key) {
    var result = undefined;
    try {
        var env = process.env.NODE_ENV || 'development';
        result = environments[env][key];
        if (result === undefined) {
            console.warn(chalk.yellow('Undefined environment key %s in %s', key, env));
        }
        return result;
    } catch(e) {
        console.error(chalk.red('Exception occurred retrieving environment config key %s in %s', key, env));
        process.exit(1);
    }
}
