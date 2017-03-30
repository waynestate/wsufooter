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
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
