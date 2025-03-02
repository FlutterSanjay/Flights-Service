const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common/index");

/**
 * POST : /airports
 * req-body: {name:'IGI',code:'DEL',address: '', cityId:5}
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirports({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });

    SuccessResponse.data = airport;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * GET : /airports
 * req-body: {}
 */
async function getAirports(req, res) {
  try {
    const airport = await AirportService.getAirports();
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * POST : /airports/:id
 * req-body: {}
 */
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    if (!airport) {
      ErrorResponse.error = "Airport Not Found!";

      return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
    }
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}
/**
 * DELETE : /airports/:id
 * req-body: {}
 */
async function destroyAirport(req, res) {
  try {
    const airport = await AirportService.destroyAirport(req.params.id);

    if (!airport) {
      ErrorResponse.error = "Airport Not Found!";
      ErrorResponse.date = "0";

      return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
    }
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
