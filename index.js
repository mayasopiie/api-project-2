//--- Libraries Initialization
const express = require("express");
const bodyParser = require("body-parser");

//--- Imported Codes Initialization
const single = require("./single");
const cities = require("./cities");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//--- LEVEL 0
app.get("/", single.displayAPI);
//----------------------------------------------------------

//--- LEVEL 1A
app.get("/cities", cities.displayCities);
//----------------------------------------------------------

//--- LEVEL 1B
app.get("/cities/:search", cities.displayCityBySearch);
//----------------------------------------------------------

//--- LEVEL 1C
app.get("/cities/:id", cities.displayCityById);
//----------------------------------------------------------

//--- LEVEL 1D
app.post("/cities", cities.addCity);
//----------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Hello! This is greeting from port ${PORT}`)
});

