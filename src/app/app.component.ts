import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1 id="angular4">{{ title }} is cool!</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular4';
  predicate = 'is cool!';
  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

}
