import { Container } from "inversify";
import {Repository } from "@data/repository/repository";
import { UserService } from "@logic/user.service";
import "@web/controllers/user.controller";
import { MODULE_TOKENS, SERVICE_MODULE } from "@core/ioc/token";
import { Knex } from "knex";
import configuration from "./mysql";


 
    const container = new Container();

    container.bind<Knex>(MODULE_TOKENS.KnexClient).toConstantValue(configuration);
    container.bind<Repository>(MODULE_TOKENS.Repository).to(Repository)
    container.bind<UserService>(SERVICE_MODULE.user_service).to(UserService)
   
 export default container