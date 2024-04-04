import { injectable } from "inversify";
import MySQLDatabase from "@core/config/mysql";
import logger from "@core/config";
const connections = new MySQLDatabase();

@injectable()
export default class DbService {
  private _db: MySQLDatabase | any;

  public async connect(): Promise<MySQLDatabase> {
    // Ensure that connections.connect() returns a MySQLDatabase object
    this._db = await connections.connect();
    logger.info(`Database connected successfully`);
    return this._db;
  }

  get user() {
    return this._db;
  }
}
