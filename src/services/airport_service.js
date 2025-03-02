const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app_error");
const { StatusCodes } = require("http-status-codes");

const airportRepository = new AirportRepository();
// async function createAirports
async function createAirports(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      // console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new Airport objects",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
// async function getAirports
async function getAirports() {
  try {
    const airport = await airportRepository.getAll();
    return airport;
  } catch (e) {
    throw new AppError(
      "Cannot Fetch Data of all Airports.",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
// async function getAirport
async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (e) {
    throw new AppError(
      "Cannot Fetch Data of all Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
// async function destroyAirport
async function destroyAirport(id) {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (e) {
    // if (e.statusCode == StatusCodes.NOT_FOUND) {
    //   throw new AppError("The airport you requested to delete is not Present.");
    // }
    throw new AppError(
      "Cannot Delete the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirports,
  getAirport,
  getAirports,
  destroyAirport,
};
