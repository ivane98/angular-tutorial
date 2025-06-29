import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { App } from "./app/app";
import { provideRouter } from "@angular/router";
import { routerConfig } from "./app/routes";

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routerConfig)],
}).catch((err) => console.error(err));
