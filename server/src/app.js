const express = require('express')
const cors = require('cors')
const path = require('path')

const planetRouter = require('./routes/planet/planet.router')
const launchesRouter = require('./routes/lauches/launches.router')

const app = express()

app.use(cors({
    origin : 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..' , 'public')))

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '..' , 'public', 'index.html'))
})




app.use('/planets', planetRouter)
app.use('/launches', launchesRouter)





module.exports = app