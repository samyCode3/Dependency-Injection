import { DevelopmentLogger, ProductionLogger } from "./logger"


let logger: any 

if(process.env.NODE_Env  === 'development') {
  
    logger = DevelopmentLogger 
}

if(process.env.NODE_Env === 'prod') {
    
    logger = ProductionLogger 
}
console.log(process.env.NODE_Env) 
export default logger   