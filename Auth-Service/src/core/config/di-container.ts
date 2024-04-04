import { Container } from "inversify";
import DbService from "@data/dbService";
import { UserRepository } from "@data/user.repository";
import { UserService } from "@logic/user.service";
import "@web/controllers/user.controller";

const container = new Container();

container.bind<DbService>(DbService).toSelf();
container.bind(UserRepository).toSelf();
container.bind(UserService).toSelf();

export default container;
