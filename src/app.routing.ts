import { Route, provideRouter } from "@angular/router";

const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./components/header.component").then((m) => m.HeaderComponent),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./components/contact.component").then((m) => m.ContactComponent),
  },
];

export const appRouting = [provideRouter(routes)];
