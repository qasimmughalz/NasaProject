const { getAllLaunches } = require("../../models/launches.model")


const httpgetAllLaunches = (req, res)=>{
    res.status(200).json(getAllLaunches)
}


module.exports = {
    httpgetAllLaunches
}