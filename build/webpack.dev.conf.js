var webpack = require('webpack')
var config = require('./webpack.base.conf.js')


var baseUrl = 'http://221.215.97.83:8089'

var webpackDevServer = require('webpack-dev-server')

new webpackDevServer(webpack(config), {
	contentBase: '../dist/',
	// proxy: {
	// 	'/login': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/login': '/login'
	// 		}
	// 	},
	// 	'/logout': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/logout': '/logout'
	// 		}
	// 	},
	// 	'/merchatInfo': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/merchatInfo': '/merchatInfo'
	// 		}
	// 	},
	// 	'/bill': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/bill': '/bill'
	// 		}
	// 	},
	// 	'/menu': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/menu': '/menu'
	// 		}
	// 	},
	// 	'/user': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/user': '/user'
	// 		}
	// 	},
	// 	'/mtuser': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/mtuser': '/mtuser'
	// 		},
	// 	},
	// 	'/bindCard': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/bindCard': '/bindCard'
	// 		}
	// 	},
	// 	'/cashAudit': {
	// 		target: baseUrl,
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			'^/cashAudit': '/cashAudit'
	// 		}
	// 	}
	// }
}).listen(8099, 'localhost')
console.log('server run 8099')