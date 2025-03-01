const express = require("express");
const router = express.Router();
const { CityMiddleware } = require("../../middlewares/index");

const { CityController } = require("../../controller");

// api/v1/cities (POST)
router.post(
  "/",
  CityMiddleware.validateCreateRequest,
  CityController.createCity
);
// api/v1/cities/:id (DELETE)
router.delete("/:id", CityController.destroyCity);

// api/v1/cities/:id (PATCH)
router.patch("/:id", CityController.updateCity);

module.exports = router;
