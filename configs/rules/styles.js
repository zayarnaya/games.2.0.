const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (prod = false) => {
    return {
    test: /\.(scss|css)$/,
    exclude: /\.module\.(scss|css)$/,
    use: [prod ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
}
}
