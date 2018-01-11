var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/footer.scss'],
    output: {
        filename: 'dist/footer.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1',
                }),
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/footer.css',
            allChunks: true,
        }),
    ],
};
