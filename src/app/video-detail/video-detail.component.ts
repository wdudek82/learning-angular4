import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  public slug: string;
  public embed: string;
  protected todayDate: Date;

  private menuList = {
      'video-1': `62Mr0elsf0s`,
      'video-2': `vGphzPLemZE`,
      'video-3': ``,
      'video-4': `EUtEqX-i1IY`,
    };

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['slug'];
      this.embed = this.menuList[this.slug];
      this.todayDate = new Date();
      console.log(this.embed);
    });
  }

  public getEmbedUrl(embedUrl: string) {
    const url = `https://www.youtube.com/embed/${embedUrl}`;
    return url;
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
