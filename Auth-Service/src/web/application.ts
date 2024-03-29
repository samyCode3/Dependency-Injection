
import express from 'express'
import container from '../di-container'
import { InversifyExpressServer } from 'inversify-express-utils'
import DbService from '../dbService'
import ErrorHandler from '../core/middleware/global-error-handler'


export class App { 
    async setup() {

      const _db =  container.get(DbService)   
      _db.connect() 
        const server = new InversifyExpressServer(container)
        server.setConfig((app) => {
             app.use(express.json())
             app.use(ErrorHandler)
        })
      
        const app = server.build()
        
    
        app.listen(5000, () => console.log(`server running on http://localhost:5000`))
    }
}