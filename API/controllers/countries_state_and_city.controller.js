const feedback = require('../models/feedback');
const  fs = require('fs');


module.exports = {

    findCountries:(req, res)=>{
        fs.readFile('./config/country.json',(err, data)=>{
            if (err) {
                res.status(500).send({ status: 400, message: 'Oops! Not able to get countries. Please try after sometimes', countries: {} });
            } else {
                console.log('data',JSON.parse(data));
                res.status(200).send({ status: 200, message: 'Countries listed successfully.', countries: JSON.parse(data) });
            }
        })
    },
    findStateByCountry:(req, res)=>{
        fs.readFile('./config/states.json',(err, data)=>{
            console.log('err',err);
            if (err) {
                res.status(500).send({ status: 400, message: 'Oops! Not able to get state. Please try after sometimes', states: {} });
            } else {
                const states = JSON.parse(data).filter(state=>state.country_code === req.params.countryCode)
                res.status(200).send({ status: 200, message: 'state listed successfully.', states: states });
            }
        })
    },
    findCityByCountryAndState:(req, res)=>{
        fs.readFile('./config/cities.json',(err, data)=>{
            if (err) {
                res.status(500).send({ status: 400, message: 'Oops! Not able to get cities. Please try after sometimes', cities: {} });
            } else {
                const cities = JSON.parse(data).filter(city=>city.state_code === req.params.stateCode && city.country_code === req.params.countryCode)
                res.status(200).send({ status: 200, message: 'cities listed successfully.', cities: cities });
            }
        })
    },
}

