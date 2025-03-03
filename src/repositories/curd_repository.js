const { where } = require("sequelize");
const { Logger } = require("../config");
const { error, exitOnError } = require("winston");
const AppError = require("../utils/errors/app_error");
const { StatusCodes } = require("http-status-codes");
const { message } = require("../utils/common/error_response");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(JSON.stringify(data));
    const response = await this.model.create(data);
    console.log(response);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    return response;
  }

  async getAll() {
    try {
      const response = await this.model.findAll(); // return array
      return response;
    } catch (error) {
      Logger.error("Something went wrong in thr Curd Repo: GetAll");
      throw error;
    }
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      // data -> {key-val, ....}
      where: {
        id: id,
      },
    });
    // return array
    return response;
  }
}
module.exports = { CrudRepository };
