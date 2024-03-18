import { Router } from "express";
import authRoutes from "./auth.routes";



const IndexRoute: Router = Router()

IndexRoute.use('/auth', authRoutes)

export default IndexRoute 