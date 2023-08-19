const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // нужен для отслеживания html
const TerserPlugin = require('terser-webpack-plugin'); // нужен для удаления LICENSE-файла
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // нужен для очисти dist-папки перед сборкой

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: '/node_modules/'
            },

            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            hash: true
        })
    ]
}