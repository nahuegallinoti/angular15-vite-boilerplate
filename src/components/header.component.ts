import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterLink, RouterOutlet],
  standalone: true,
  template: `
    <div class="header">
      <div class="header__menu">
        <ul>
          <a routerLink="/">Home</a>
          <a routerLink="contact">Contact</a>
        </ul>
      </div>
    </div>
  `,
})
export class HeaderComponent {}
