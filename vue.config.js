module.exports = {
	publicPath: "./",
    devServer: {
		// 后端请求转发，此配置仅开发环境有效，生产环境请参考生产环境部署文档配置nginx转发
		proxy: {
			'/wx': {
				target: 'http://192.168.1.177:8088/'
			}
		},
		port:8001
	},
	configureWebpack:{
		devServer: {
			allowedHosts: "all",
		}
	},
	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('prefetch')
	},

	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,
	css: undefined
}