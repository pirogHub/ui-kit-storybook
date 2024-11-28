const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	//   entry: "./src/index.ts",
	entry: path.resolve(__dirname, 'src/index.ts'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	externals: {
		react: 'react',
		'react-dom': 'ReactDOM',
		'@mui/material': 'MaterialUI',
		'@mui/x-date-pickers': 'XDatePickers',
		dayjs: 'dayjs',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // Обрабатываем файлы .js и .jsx
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-react', {development: false, runtime: 'automatic'}],
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'entry',
								},
							],
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	plugins: [new BundleAnalyzerPlugin()],
};
