import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchLocation = 'Poland';
  searchQuery = 'new search';

  @Input()
  passedQuery: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.passedQuery) {
      this.searchQuery = this.passedQuery;
    }
  }

  submitSearch(event, searchForm) {
    console.log(event);
    console.log(searchForm.value);
    console.log(searchForm.value.q);

    const query: string = searchForm.value.q;
    if (query) {
      this.router.navigate(['/search', {q: query}]);
    }
  }

  searchQueryChange() {
    this.searchLocation = 'Poland/Krakow';
  }

}
