const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app_error");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();

async function createAirplanes(data) {
  try {
    const airplane = await airplaneRepository.create(data);

    return airplane;
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
      "Cannot create a new Airplanes objects",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplane = await airplaneRepository.getAll();
    return airplane;
  } catch (e) {
    throw new AppError(
      "Cannot Fetch Data of all Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// async function destro
module.exports = {
  createAirplanes,
  getAirplanes,
};
