import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
