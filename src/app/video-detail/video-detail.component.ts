import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
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
              private http: Http) {}

  ngOnInit(): void {
    this.req = this.http.get('assets/json/videos.json')
      .subscribe(data => {
        this.menuList = data.json() as [any];
        this.routeSub = this.route.params.subscribe(params => {
          this.slug = params['slug'];
          this.embed = this.menuList[this.slug];
          this.todayDate = new Date();
        });
      });

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
