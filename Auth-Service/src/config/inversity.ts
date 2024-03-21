import { Container } from 'inversify';
import  '../controller/auth.controller';
import db from '../models'
import UserService from '../services/auth.service';
import BaseService from '../repository/auth.repos';

const container = new Container();
container.bind<db>('database').toConstantValue(db);
container.bind<BaseService>(BaseService).toSelf();
container.bind<UserService>(UserService).toSelf()


export default container;