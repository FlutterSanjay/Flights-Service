const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common/index");


/**
 * POST : /airplanes
 * req-body: {modelNumber: 'airbus324', capacity:200}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplanes({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplane = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * POST : /airplanes/:id
 * req-body: {}
 */
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    if (!airplane) {
      ErrorResponse.error = "Airplane Not Found!";

      return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
    }
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}
/**
 * DELETE : /airplanes/:id
 * req-body: {}
 */
async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    if (!airplane) {
      ErrorResponse.error = "Airplane Not Found!";
      ErrorResponse.date = "0";

      return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
    }
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
