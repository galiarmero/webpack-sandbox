const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    /* Single Entry
        entry: './src/index.js',
    */
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        /* Single Output
            filename: 'bundle.js',
        */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};

module.exports = config;