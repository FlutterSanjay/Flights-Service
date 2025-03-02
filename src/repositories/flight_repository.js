const { Flight } = require("../models");
const { CrudRepository } = require("./curd_repository");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); // call the Parent Class COnstructor using super
  }
}
module.exports = FlightRepository;
