const express = require("express");
const { InfoController } = require("../../controller");
const router = express.Router();
const airplaneRoutes = require("./airplane_routes");

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);
module.exports = router;
