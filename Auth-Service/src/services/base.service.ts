import { injectable } from 'inversify'
import db from '../models'

@injectable()
export default class BaseService {
    protected database: db 
    constructor(database: db) {
        this.database = database
    }

    async get(): Promise<Object> {
        return this.database.User.findAll()
    }
} 