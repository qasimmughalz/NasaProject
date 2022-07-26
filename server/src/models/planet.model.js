const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");

const planets = [];

const isLivable = (data) => {
  return (
    data["koi_disposition"] == "CONFIRMED" &&
    data["koi_insol"] > 0.36 &&
    data["koi_insol"] < 1.11 &&
    data["koi_prad"] < 1.6
  );
};

const LoadPlanetsFunc = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "planetsData", "data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isLivable(data)) {
          planets.push(data);
        }
      })
      .on("error", (er) => {
        console.log(er);
        reject(er)
      })
      .on("end", () => {
        console.log(`${planets.length} number of planets found`);
        resolve();
        console.log("Resolved !!!");
      });
  });
};

const getAllPlanets = ()=>{
  console.log("PLanets at sending")
  return planets
}


module.exports = {
    LoadPlanetsFunc,
    getAllPlanets,
};
