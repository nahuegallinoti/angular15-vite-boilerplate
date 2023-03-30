import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact",
  imports: [CommonModule],
  standalone: true,
  template: `
    <div>
      <div>
        <h1 class="font-mono">Contact</h1>
      </div>
      <div>
        <form>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
        </form>
      </div>
    </div>
  `,
})
export class ContactComponent {}
