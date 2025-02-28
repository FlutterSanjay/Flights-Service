const { Airplane } = require("../models");
const { CrudRepository } = require("./curd_repository");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane); // call the Parent Class COnstructor using super
  }
}
module.exports = AirplaneRepository;
