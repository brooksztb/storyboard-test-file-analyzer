const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const info = require('./services/info')

const app = express()
app.use(cors())
app.use(bodyParser.json())

//Currently only gets the static audio file but could be expanded to work with with a db of audio files to analyze
app.get('/fileinfo', (req, res) => {
	info((error, audioTrack) => {
		if (error) {
			res.status(500).send('error', { error: error })
		}
		if (audioTrack) {
			res.status(200)
			res.json(audioTrack)
		} else {
			res.status(500).send('error', {
				error: new Error('Returned audio track is invalid!'),
			})
		}
	})
})

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
