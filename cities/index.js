const fs = require("fs");

const DATA_JSON = "./data/seed.json"
const DATA = JSON.parse(fs.readFileSync(DATA_JSON, 'utf8'));

const cities = {
    //--- LEVEL 1A
    displayCities: (req, res) => {
        res.status(200).send(DATA.cities);
    },

    //--- LEVEL 1B
    displayCityBySearch: (req, res) => {
        const cityData = DATA.cities.find(city => {
            const searchedCity = String(req.params.search);
            return city.cityName.toLowerCase() === searchedCity.toLowerCase();
        })

        if (cityData) {
            res.status(200).send(cityData);
        }
        else{
            res.status(400).send({message: "The data you have searched is not found"})
        }
    },

    //--- LEVEL 1C
    displayCityById: (req, res) => {
        const cityData = DATA.cities.find(city => {
            const cityId = city.id;
            const searchedId = Number(req.params.id);
            return cityId === searchedId;
        })

        if (cityData){
            res.status(200).send(cityData);
        }
        else {
            res.status(400).send({message: "The data you have searched is not found"});
        }
    },

    //---LEVEL 1D
    addCity: (req, res) => {
        if (req.body.text){
            DATA.dataCounter += 1;

            const city = {
                id: DATA.dataCounter,
                text: req.body.text
            }

            DATA.cities.push(city);

            const citiesString = JSON.stringify(DATA, null, 2);
            fs.writeFileSync(DATA_JSON, citiesString, "utf8");

            res.status(201).send(city);
        }
        else {
            res.status(400).send({message: "You have to insert data of city first"})
        }
    }
}

module.exports = cities;