const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const info = require('./info')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.json({
		message: 'Behold The MEVN Stack!',
	})
})

app.get('/fileinfo', (req, res) => {
	info((error, audioTrack) => {
		if (audioTrack) {
			res.json(audioTrack)
		}
	})
})

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`)
})
