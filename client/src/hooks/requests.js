
async function httpGetPlanets() {

  const response = await fetch('http://localhost:8000/planets')
  const {planets} = await response.json()
  return planets
}

async function httpGetLaunches() {
  const response = await fetch('http://localhost:8000/launches')
  const fetechedLaunches =  await response.json()
  return fetechedLaunches.sort((a, b)=> a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch ssystem.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};