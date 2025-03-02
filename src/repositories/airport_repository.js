const { Airport } = require("../models");
const { CrudRepository } = require("./curd_repository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport); // call the Parent Class COnstructor using super
  }
}
module.exports = AirportRepository;
