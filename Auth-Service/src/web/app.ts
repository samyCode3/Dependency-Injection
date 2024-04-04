import "reflect-metadata";

import "@web/controllers/user.controller";
import { App } from "@web/application";

export const bootstrap = async () => {
  new App().setup();
};

bootstrap();
