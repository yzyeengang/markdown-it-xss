/**
 * @Author: yezy
 * @Email: yzyeengang@foxmail.com
 * @Date: 2020/4/17 16:52
 * @LastEditors: yezy
 * @LastEditTime: 2020/4/17 16:52
 * @Description:
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../index.js')
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'markdown-it-xss.js',
        library: 'markdown-it-xss',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    target: 'web'
}