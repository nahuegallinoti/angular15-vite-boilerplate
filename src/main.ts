import "@angular/compiler";
import "zone.js";
import "./index.css";
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
import { bootstrapApplication } from "@angular/platform-browser";

bootstrapApplication(AppComponent, {
  providers: [...appRouting],
});
