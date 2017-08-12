import { Component, OnInit, OnDestroy } from '@angular/core';

import { VideoService } from '../videos/videos.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {

  private req: any;
  videoList: [any];

  constructor(private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list()
      .subscribe(data => {
        console.log(data);
        this.videoList = data as [any];
      });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
