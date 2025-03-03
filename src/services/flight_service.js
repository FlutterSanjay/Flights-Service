const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app_error");
const { StatusCodes } = require("http-status-codes");

const flightRepository = new FlightRepository();
// async function createAirports
async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    console.log(flight);

    return flight;
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

module.exports = {
  createFlight,
};
