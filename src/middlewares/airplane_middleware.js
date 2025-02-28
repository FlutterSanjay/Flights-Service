const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common/index");
const AppError = require("../utils/errors/app_error");

function validateCreateRequest(req, res, next) {
  ErrorResponse.message = "Something went wrong while creating airplane";
  ErrorResponse.error = new AppError(
    ["Model Number is Not Valid"],
    StatusCodes.BAD_REQUEST
  );
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
};
