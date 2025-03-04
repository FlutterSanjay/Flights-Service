const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common/index");
const { DateTimeCompare } = require("../utils/index");

/**
 * POST : /flights
 * req-body: {
 * flightNumber: 'UK 808',
 * airplaneId:'a308',
 * departureAirportId:12,
 * arrivalTime:'11:10:00'
 * arrivalAirportId:11,
 * departureTime:'9:10:00',
 * price:2000,
 *boardingGate:'12A'
 * totalSeats:120
 * }
 */
async function createFlight(req, res) {
  const timeString1 = req.body.arrivalTime.toString();
  const timeString2 = req.body.departureTime.toString();
  const dateTimeCompare = DateTimeCompare(timeString1, timeString2);

  try {
    if (dateTimeCompare) {
      const flight = await FlightService.createFlight({
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price,
        boardingGate: req.body.boardingGate,
        totalSeats: req.body.totalSeats,
      });

      SuccessResponse.data = flight;

      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } else {
      ErrorResponse.error =
        "Arrival Time should be Greater than Departure Time";
      return res.status(StatusCodes.NOT_ACCEPTABLE).json(ErrorResponse);
    }
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);

    if (flights.length == 0) {
      SuccessResponse.message = "No Flight Found";
      SuccessResponse.data = "0";
      return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    }
    SuccessResponse.message = "Flight Found";
    SuccessResponse.data = flights;
    return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
  } catch (e) {
    ErrorResponse.error = e;
    return res.status(e.StatusCodes).json(ErrorResponse);
  }
}
module.exports = {
  createFlight,
  getAllFlights,
};
