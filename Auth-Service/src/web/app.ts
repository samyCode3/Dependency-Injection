import "reflect-metadata";

import "@web/controllers/user.controller";
import { App } from "@web/application";
import '@core/config/redis.config'

export const bootstrap = async () => {
  new App().setup();
};

bootstrap();
