import { Container } from "inversify";
import DbService from "./dbService";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import './user.controller'

const container = new Container()


container.bind<DbService>(DbService).toSelf()
container.bind(UserRepository).toSelf()
container.bind(UserService).toSelf()

export default container 