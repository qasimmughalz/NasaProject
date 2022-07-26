const launches = new Map()

const launch = {
    flightNumber: 100, 
    mission:'Kepler Exploration X',
    rocket:'Explorer IS1',
    launchDate:new Date('December 12, 2025'),
    destination:'Kepler-442 b',
    customer:['ztm', 'nasa'],
    upcoming:true,
    success:true
}

launches.set(launch.flightNumber , launch)

const getAllLaunches = ()=>{
    return Array.from(launches.values())
}

module.exports = {
    getAllLaunches
}

