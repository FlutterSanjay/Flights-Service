const { StatusCodes } = require("http-status-codes");

const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app_error");

const { ErrorResponse } = require("../utils/common");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      // console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    } else if (error.name == "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      // console.log(explanation);
      throw new AppError(explanation, StatusCodes.CONFLICT);
    }
    throw new AppError(
      "Cannot create a new Airplanes objects",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (e) {
    throw new AppError(
      "Cannot Delete the City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);

    return city;
  } catch (e) {
    return e.name;
  }
}
module.exports = {
  createCity,
  destroyCity,
  updateCity,
};
