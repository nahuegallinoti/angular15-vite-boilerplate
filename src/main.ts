import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
import "./index.css";

bootstrapApplication(AppComponent, {
  providers: [...appRouting],
});
