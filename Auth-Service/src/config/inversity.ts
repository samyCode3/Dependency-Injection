import { Container } from "inversify";
import UserService from "../services/auth.service";
import UserController from "../controller/auth.controller";
import BaseService from "../services/base.service";
import db from '../models'
const container = new Container()

container.bind<db>('Database').toConstantValue(db);
container.bind<UserService>('service').to(UserService)
container.bind<UserController>('controller').to(UserController)


export default container