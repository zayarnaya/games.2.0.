const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (prod = false) => {
    return {
    test: /\.module\.(scss|css)$/,
    use: [prod ? MiniCssExtractPlugin.loader : 'style-loader', { loader: 'css-loader', options: { modules: {
        localIdentName:'[local]__[hash:base64:5]',
    } } }, 'sass-loader'],
}
}
