const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is Live",
    error: {}, // if error occured
    data: {},
  });
};

// send karne ke liye
module.exports = {
  info,
};
