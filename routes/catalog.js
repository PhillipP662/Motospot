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

// GET request for one Model.
router.get("/model/:id", model_controller.model_detail);

// GET request for list of all Model.
router.get("/models", model_controller.model_list);

/// Brand ROUTES ///

// GET request for one Brand.
router.get("/brand/:id", brand_controller.brand_detail);

// GET request for list of all Brands.
router.get("/brands", brand_controller.brand_list);

/// BIKETYPE ROUTES ///
// GET request for one BikeType.
router.get("/biketype/:id", biketype_controller.biketype_detail);

// GET request for list of all BikeType.
router.get("/biketypes", biketype_controller.biketype_list);

/// COOKIES ///
router.get("/cookie_policy", extra_controller.view_cookie_policy);


module.exports = router;
