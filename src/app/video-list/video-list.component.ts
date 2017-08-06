import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList = [
    {name: 'video 1', slug: 'video-1'},
    {name: 'video 2', slug: 'video-2'},
    {name: 'video 3', slug: 'video-3'},
    {name: 'video 4', slug: 'video-4'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
