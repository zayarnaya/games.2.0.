module.exports = {
    test: /\.js(x?)$/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
        },
    },
    exclude: /node_modules/,
}
