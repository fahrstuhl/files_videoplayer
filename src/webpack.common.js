const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'viewer.js'),
	output: {
		path: path.resolve(__dirname, '../js'),
		publicPath: '/js/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(svg)$/i,
				use: [
					{
						loader: 'url-loader'
					}
				]
			}
		]
	},
	resolve: {
        alias: {
            'videojs-vr': __dirname + '/../node_modules/videojs-vr/dist/videojs-vr.min.js' /* fixes https://github.com/videojs/videojs-vr/issues/188 */
        },
		extensions: ['*', '.js']
	}
};
