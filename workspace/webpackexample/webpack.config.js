const webpack = require('webpack'); // installed
const path = require('path'); // built-in nodejs module
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed

const config = {
    entry: './src/index.js',
    target: ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            //   {
            //     test: /\.ts$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            //   }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;