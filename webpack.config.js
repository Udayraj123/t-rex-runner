module.exports={
    entry: "./index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'sourcemap-inline',
    module: {
        rules: [
            // file-loader to make images importable
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['url-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}