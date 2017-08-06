import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1 id="angular4">{{ title }} is cool!</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4';
  predicate = 'is cool!';
}
