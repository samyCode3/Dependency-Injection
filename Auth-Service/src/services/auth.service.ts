import {inject, injectable} from 'inversify'
import db from '../models/index.js'
import BaseService from './base.service'

let {User} =db
@injectable()
export default class UserService extends BaseService{
    constructor(@inject('Database') database: db) {
          super(database)
    }
     async create(): Promise<Object> {
        let user = await this.get()
         return {
            user
         }
     }
}