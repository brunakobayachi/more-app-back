const defaultConfig = {
	app: {
		port: 5000,
		clientUrl: 'http://localhost:3000',
		isDev: process.env.NODE_ENV !== 'production',
		isTestNet: process.env.APP_TESTNET === 'false' ? false : true,
	},
	mongo: {
		url: 'mongodb://localhost:27017/more-app',
		config: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
}

module.exports = defaultConfig;