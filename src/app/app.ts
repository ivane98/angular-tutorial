import { Component } from "@angular/core";
import { Home } from "./home/home";
import { RouterModule } from "@angular/router";
import { Notes } from "./notes/notes";

@Component({
  selector: "app-root",
  imports: [RouterModule, Notes],
  template: `
    <main>
      <app-notes></app-notes>
    </main>
  `,
  styleUrls: ["./app.css"],
})
export class App {
  title = "homes";
}
