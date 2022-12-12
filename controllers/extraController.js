var Model = require("../models/model");

var async = require("async");
const https = require("https");

// Display weather
exports.view_weather = function (req, res) {
    const lat = "51.05";
    const lon = "3.71667";
    const apiKey = "b4e7443e3b3e82028e030e6fea500224";
    const api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
    https.get(api, function(response) {
        response.on("data", function(data) {
            const jsondata = JSON.parse(data);
            const temp = jsondata.main.temp;
            const temp_min = jsondata.main.temp_min;
            const temp_max = jsondata.main.temp_max;
            const cloudiness = jsondata.clouds.all;
            const icon = jsondata.weather[0].icon;
            const imageurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.render("weather_view", {temp, temp_min, temp_max, cloudiness, imageurl});
        });
    });
};
exports.view_weather_adm = function (req, res) {
    const lat = "51.05";
    const lon = "3.71667";
    const apiKey = "b4e7443e3b3e82028e030e6fea500224";
    const api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
    https.get(api, function(response) {
        response.on("data", function(data) {
            const jsondata = JSON.parse(data);
            const temp = jsondata.main.temp;
            const temp_min = jsondata.main.temp_min;
            const temp_max = jsondata.main.temp_max;
            const cloudiness = jsondata.clouds.all;
            const icon = jsondata.weather[0].icon;
            const imageurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.render("weather_view_adm", {temp, temp_min, temp_max, cloudiness, imageurl});
        });
    });
};

// Display search menu
exports.search_model = function (req, res) {
    res.render("search_model");
};
exports.search_model_adm = function (req, res) {
    res.render("search_model_adm");
};
exports.get_models = async function (req, res) {
    let payload = req.body.payload.trim();
    let search = await Model.find({model_name: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec();
    // Limit results to 10
    search = search.slice(0, 10);
    res.send({payload: search});
};

// Display cookie policy
exports.view_cookie_policy = function (req, res) {
    res.render("cookie_policy");
};
exports.view_cookie_policy_adm = function (req, res) {
    res.render("cookie_policy_adm");
};