const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


module.exports = {
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        publicPath: '/',
        historyApiFallback: true
    }
};