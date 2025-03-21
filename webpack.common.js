const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const devMode = process.env.NODE_ENV !== "production"

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[loaders]",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
}
