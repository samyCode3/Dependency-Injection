import express, { NextFunction, request, response } from "express";
import container from "@core/config/di-container";
import { InversifyExpressServer } from "inversify-express-utils";
import client from "@core/config/redis.config";
import morgan from "morgan";
import ErrorHandler from "@core/middleware/global.error";

export class App {
  async setup() {
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(express.json());
      app.get(
        "/",
        (
          request: Request | any,
          response: Response | any,
          next: NextFunction
        ) => {
          return response.send(`Hey lord`);
        }
      );
      // app.use(
      //   "*",
      //   (
      //     request: Request | any,
      //     response: Response | any,
      //     next: NextFunction
      //   ) => {
      //     return response
      //       .status(404)
      //       .json({
      //         message: `The route you are tying to call ${request.originalUrl} is not found`,
      //       });
      //   }
      // );
 
      app.use(morgan("dev"));

      app.use(ErrorHandler)
    });

    server.setErrorConfig((app) => {
      app.use(ErrorHandler);
      app.use(morgan("dev"));
    });

    const app = server.build();

    app.listen(5000, () => 
      console.log(`server running on http://localhost:5000`)
    );
  }
}
