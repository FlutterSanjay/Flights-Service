const express = require("express");
const { InfoController } = require("../../controller");
const router = express.Router();
const airplaneRoutes = require("./airplane_routes");
const cityRoutes = require("./city_routes");
const airportRoutes = require("./airport_routes");

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);

router.use("/cities", cityRoutes);

router.use("/airports", airportRoutes);
module.exports = router;
