import { inject, injectable } from 'inversify'
import db from '../models'

@injectable()
export default class BaseService {
    protected database: db 
    constructor(@inject('database') database: db) {
        this.database = database
    }

    async get(): Promise<Object> {
        return await this.database.User.findAll()
    }
} 