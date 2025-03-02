const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common/index");
const AppError = require("../utils/errors/app_error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating airport.";
    ErrorResponse.error = new AppError(
      ["Name is Not Valid"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating airport.";
    ErrorResponse.error = new AppError(
      ["Airport Code is Not Valid"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating airport.";
    ErrorResponse.error = new AppError(
      ["City ID is Not Valid"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
};
