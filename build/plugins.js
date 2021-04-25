const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const DllReferencePlugin = require('webpack').DllReferencePlugin
const path = require('path')

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/template/index.html',
        inject: true,
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
    }),
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new DllReferencePlugin({
        context: path.resolve(__dirname, '../'),
        manifest: path.resolve(__dirname, '../dll/react.manifest.json'),
    }),
    new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, '../dll/_dll_react.js'),
        outputPath: './dll',
        publicPath: './dll',
    }),
]
