import 'reflect-metadata'

import '../user.controller'
import { App } from './application'

export const bootstrap = async () => {
   new App().setup()
}


bootstrap()