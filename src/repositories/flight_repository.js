const { Flight } = require("../models");
const { CrudRepository } = require("./curd_repository");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); // call the Parent Class COnstructor using super
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
    });

    return response;
  }
}
module.exports = FlightRepository;
