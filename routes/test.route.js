const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
	try {
		console.log('bateu aqui')
		const message = 'tá testado meu mano'
		res.send(message)
	} catch (err) {
		console.log(err)
	}
})

module.exports = router
