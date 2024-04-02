const { options } = require("../plugins/HtmlWebpackPlugin");

module.exports = {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: "html-loader",
    options: {
        esModule: true,
    }
}
