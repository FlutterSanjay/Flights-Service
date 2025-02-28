const { where } = require("sequelize");
const { Logger } = require("../config");
const { error } = require("winston");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
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
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (e) {
      Logger.error("Something went wrong in thr Curd Repo: Get");
      throw error;
    }
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
    try {
      const response = await this.model.update(data, {
        // data -> {col-val, ....}
        where: {
          id: id,
        },
      }); // return array
      return response;
    } catch (error) {
      Logger.error("Something went wrong in thr Curd Repo: GetAll");
      throw error;
    }
  }
}
module.exports = { CrudRepository };
