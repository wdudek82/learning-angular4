import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageList = [
    {
      url: 'http://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
      title: 'Image 1',
      link: './videos/video-3',
    },
    {
      url: 'http://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
      title: 'Image 2',
      link: './videos/video-1',
    },
    {
      url: 'http://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
      title: 'Image 3',
      link: './videos/video-2',
    },
  ];
  prevented = false;

  constructor(private router: Router) { }

  ngOnInit() {
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

}
