import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = 'assets/json/videos.json';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  private handleError(error: any, caught: any): any {
    console.log(error, caught);
  }

  list() {
    return this.http.get(endpoint)
      .map(response => response.json())
      .catch(this.handleError);
  }

  get(slug) {
    return this.http.get(endpoint)
      .map(response => {
        return Object.keys(response.json())
          .filter(key => key === slug);
      })
      .catch(this.handleError);
  }

}
