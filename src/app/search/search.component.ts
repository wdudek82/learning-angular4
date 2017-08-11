import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchLocation = 'Poland';
  searchQuery = 'new serach';

  constructor() { }

  ngOnInit() {
  }

  submitSearch(event, searchForm) {
    console.log(event);
    console.log(searchForm.value);
    console.log(searchForm.value.q);
  }

  searchQueryChange() {
    this.searchLocation = 'Poland/Krakow';
  }

}
