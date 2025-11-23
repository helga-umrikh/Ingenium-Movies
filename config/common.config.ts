import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

dotenv.config();

export const rootPath = path.resolve(__dirname, '..');

export const config: webpack.Configuration = {
	entry: path.resolve(rootPath, 'src', 'index.tsx'),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(rootPath, 'public', 'index.html'),
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			'process.env.REACT_APP_ACCESS_KEY': JSON.stringify(process.env.REACT_APP_ACCESS_KEY),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: false,
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							fallback: 'file-loader',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.png', '.jpg', '.gif', '.svg', '.ico'],
		alias: {
			'@components': path.resolve(rootPath, 'src/components/'),
			'@pages': path.resolve(rootPath, 'src/pages/'),
			'@utils': path.resolve(rootPath, 'src/utils/'),
			'@assets': path.resolve(rootPath, 'src/assets/'),
		},
	},
	stats: {
		errorDetails: true,
	},
};
