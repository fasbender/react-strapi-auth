const express = require('express')
const app = express()
const path = require('path')
const port = 5000

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => res.send('hello world'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => console.log(`app listening on port ${port}`))