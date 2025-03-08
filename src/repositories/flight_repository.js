const { Flight, Airplane, Airport, Sequelize, City } = require("../models");
const { CrudRepository } = require("./curd_repository");
const db = require("../models");
const { addRowLockOnFlights } = require("../repositories/queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); // call the Parent Class Constructor using super
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          require: true,
          as: "airplaneDetail",
        },
        {
          model: Airport,
          require: true,
          as: "departureAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
          include: {
            model: City,
            require: true,
          },
        },

        {
          model: Airport,
          require: true,
          as: "arrivalAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
          include: {
            model: City,
            require: true,
          },
        },
      ],
    });

    return response;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(addRowLockOnFlights(flightId));
    const flight = await Flight.findByPk(flightId);
    if (parseInt(dec)) {
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }
    return flight;
  }
}
module.exports = FlightRepository;
