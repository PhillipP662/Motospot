const express = require("express");
const router = express.Router();

// Require our controllers.
const model_controller = require("../controllers/modelController");
const brand_controller = require("../controllers/brandController");
const biketype_controller = require("../controllers/biketypeController");
const extra_controller = require("../controllers/extraController");
const https = require("https");
const Model = require("../models/model");

/// MODEL ROUTES ///

// GET catalog home page.
router.get("/", model_controller.index);

// GET catalog weather page.
router.get("/weather", extra_controller.view_weather);

// GET catalog search page.
router.get("/search", extra_controller.search_model);
// POST catalog search page.
router.post("/getModels", extra_controller.get_models);

// GET request for creating a Model. NOTE This must come before routes that display Model (uses id).
router.get("/model/create", model_controller.model_create_get);

// POST request for creating Model.
router.post("/model/create", model_controller.model_create_post);

// GET request to delete Model.
router.get("/model/:id/delete", model_controller.model_delete_get);

// POST request to delete Model.
router.post("/model/:id/delete", model_controller.model_delete_post);

// GET request to update Model.
router.get("/model/:id/update", model_controller.model_update_get);

// POST request to update Model.
router.post("/model/:id/update", model_controller.model_update_post);

// GET request for one Model.
router.get("/model/:id", model_controller.model_detail);

// GET request for list of all Model.
router.get("/models", model_controller.model_list);

/// Brand ROUTES ///

// GET request for creating Brand. NOTE This must come before route for id (i.e. display brand).
router.get("/brand/create", brand_controller.brand_create_get);

// POST request for creating Brand.
router.post("/brand/create", brand_controller.brand_create_post);

// GET request to delete Brand.
router.get("/brand/:id/delete", brand_controller.brand_delete_get);

// POST request to delete brand
router.post("/brand/:id/delete", brand_controller.brand_delete_post);

// GET request to update brand.
router.get("/brand/:id/update", brand_controller.brand_update_get);

// POST request to update brand.
router.post("/brand/:id/update", brand_controller.brand_update_post);

// GET request for one Brand.
router.get("/brand/:id", brand_controller.brand_detail);

// GET request for list of all Brands.
router.get("/brands", brand_controller.brand_list);

/// BIKETYPE ROUTES ///

// GET request for creating a BikeType. NOTE This must come before route that displays BikeType (uses id).
router.get("/biketype/create", biketype_controller.biketype_create_get);

// POST request for creating BikeType.
router.post("/biketype/create", biketype_controller.biketype_create_post);

// GET request to delete BikeType.
router.get("/biketype/:id/delete", biketype_controller.biketype_delete_get);

// POST request to delete BikeType.
router.post("/biketype/:id/delete", biketype_controller.biketype_delete_post);

// GET request to update BikeType.
router.get("/biketype/:id/update", biketype_controller.biketype_update_get);

// POST request to update BikeType.
router.post("/biketype/:id/update", biketype_controller.biketype_update_post);

// GET request for one BikeType.
router.get("/biketype/:id", biketype_controller.biketype_detail);

// GET request for list of all BikeType.
router.get("/biketypes", biketype_controller.biketype_list);

/// COOKIES ///
function validateCookie(req, res, next) {
    const { cookies } = req;
    if ('session_id' in cookies) {
        console.log('Session ID Exists.');
        if (cookies.session_id === '123456') next();
        else res.status(403).send( { msg: 'Not Authenticated' });
    }   else res.status(403).send( { msg: 'Not Authenticated' });
}
router.get("/signin", function(req, res) {
    res.cookie('session_id', '123456');
    res.status(200).json({ msg: 'Logged In' });
    //res.render("tempView");
});
router.get("/protected", validateCookie, function(req, res) {
    res.status(200).json( { msg: 'You are authorized!'});
});


module.exports = router;
