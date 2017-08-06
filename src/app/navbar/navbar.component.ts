import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList = [
    {name: 'videos', slug: 'videos/'},
    {name: 'item 1', slug: 'videos/video-1'},
    {name: 'item 2', slug: 'videos/video-2'},
    {name: 'item 3', slug: 'videos/video-3'},
    {name: 'item 4', slug: 'videos/video-4'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
