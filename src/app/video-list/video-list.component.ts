import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {

  private req: any;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.req = this.http.get('assets/json/videos.json')
    //   .subscribe(data => console.log(data.json()[0]['video-1']));
  }

  ngOnDestroy() {
    // this.req.unsubscribe();
  }

}
