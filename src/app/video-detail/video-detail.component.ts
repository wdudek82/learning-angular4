import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// import { Http } from '@angular/http';

import { VideoService } from '../videos/videos.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  private req: any;
  private routeSub: any;
  protected todayDate: Date;
  public slug: string;
  public embed: string;

  private menuList: [any];
  public todos: [any];

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              // private http: Http,
              private _video: VideoService) {}

  ngOnInit(): void {
    this.req = this._video.list()
      .subscribe(data => {
        this.menuList = data as [any];

        this.routeSub = this.route.params
            .subscribe(params => {
          this.slug = params['slug'];
          this.embed = this.menuList[this.slug];
          this.todayDate = new Date();
        });
      });

    // this.routeSub = this.route.params
    //   .subscribe(params => {
    //     this.todayDate = new Date();
    //     this.slug = params['slug'];
    //
    //     this.req = this._video.get(this.slug)
    //       .subscribe(item => {
    //         console.log(item[0]);
    //         this.embed = item[0];
    //       });
    //   });

    // this.req = this.http.get('http://localhost:8000/api/todo/task-list/3/')
    //   .subscribe(data => {
    //     console.log(data.json());
    //     this.todos = data.json()['tasks'];
    //     this.todos.forEach(item => console.log(item));
    //   });
  }

  public getEmbedUrl(embedUrl: string) {
    return `https://www.youtube.com/embed/${embedUrl}`;
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
