const http = require('http')

const app = require('./app')
const { LoadPlanetsFunc } = require('./models/planet.model')

const PORT = process.env.PORT || 8000


const server = http.createServer(app)


const runServer = async ()=>{
    await LoadPlanetsFunc();
    server.listen(PORT, ()=> console.log(`Listening to port ${PORT} ....`))
}

runServer();

