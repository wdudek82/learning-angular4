import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private req: any;
  imageList: [any];
  prevented = false;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.req = this.http.get('assets/json/images.json')
      .subscribe(data => {
        console.log(data.json());
        this.imageList = data.json();
      });
  }

  preventNormal(event: MouseEvent, tag1: any, tag2: any, image: any) {
    if (!this.prevented) {
      console.log(event);
      console.log(tag1);
      console.log(tag2);
      console.log(tag2.getAttribute('href'));

      event.preventDefault();
      image.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/1200px-Clouds_over_the_Atlantic_Ocean.jpg');
      alert('Ha!:D');
      this.prevented = true;
    } else {
      alert('prevented!');
      this.router.navigate(['./videos']);  // redirection
    }
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
