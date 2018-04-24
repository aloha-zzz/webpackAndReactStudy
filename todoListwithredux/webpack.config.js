var webpack = require('webpack');


module.exports = {
    entry: ["babel-polyfill", "./index.js"],
    output: {
        filename: "./bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    devServer: {
        host: 'localhost',
        hot: true,
        inline: true,
        historyApiFallback: true,

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}