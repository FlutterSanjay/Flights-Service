const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common/index");

/**
 * POST : /cities
 * req-body: {name:'Kolkate'}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = city;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (e) {
    if (e.statusCode == 409) {
      ErrorResponse.error = e;
      return res.status(StatusCodes.CONFLICT).json(ErrorResponse);
    }
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * DELETE : /cities/:id
 * req-body: {}
 */
async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCity(req.params.id);
    if (!city) {
      ErrorResponse.error = "City Not Found!";
      ErrorResponse.date = "0";

      return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
    }
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * PATCH : /cities/:id
 * req-body: {"name":"city"}
 */

async function updateCity(req, res) {
  try {
    const name = req.body;
    const id = req.params.id;
    const city = await CityService.updateCity(id, name, res);
    if (!city) {
      ErrorResponse.error = city;
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    } else if (city == "SequelizeUniqueConstraintError") {
      ErrorResponse.error = "City Name must be Unique.";
      return res.status(StatusCodes.CONFLICT).json(ErrorResponse);
    } else {
      SuccessResponse.data = "City Name get Updated.";
      return res.status(StatusCodes.OK).json(SuccessResponse);
    }
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destroyCity,
  updateCity,
};
