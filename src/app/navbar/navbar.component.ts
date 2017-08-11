import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  menuList = [
    {
      name: 'home',
      slug: 'videos/',
      embed: `62Mr0elsf0s`
    },
    {
      name: 'item 1',
      slug: 'videos/video-1',
      embed: `62Mr0elsf0s`
    },
    {
      name: 'item 2',
      slug: 'videos/video-2',
      embed: `62Mr0elsf0s`
    },
    {
      name: 'item 3',
      slug: 'videos/video-3',
      embed: `62Mr0elsf0s`
    },
    {
      name: 'item 4',
      slug: 'videos/video-4',
      embed: ''
    },
  ];

  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params
      .subscribe(params => {
        console.log(params);
        this.query = params.q;
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
