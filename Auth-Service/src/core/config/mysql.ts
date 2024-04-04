import knex, { Knex } from "knex";
import configuration from "@core/config/connections";

export default class MySQLDatabase {
  private _db: Knex;
  constructor() {
    this._db = knex(configuration);
  }

  async connect() {
    return this._db;
  }
}
