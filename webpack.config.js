var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["./src/footer.scss"],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "footer.css"
        })
    ]
};
