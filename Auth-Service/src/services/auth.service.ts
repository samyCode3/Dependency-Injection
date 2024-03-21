import {inject, injectable} from 'inversify'
import BaseService from '../repository/auth.repos'

@injectable()
export default class UserService extends BaseService {
    constructor(@inject('database')  database: BaseService) {
       super(database)
    }
     async create(): Promise<Object> {
        let user = await this.get()
         return {
            user: "samson"
         }
     }
}