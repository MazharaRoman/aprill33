import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  private movies: Array<any>;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.get().subscribe(
      movies => {
        console.log(movies);
        this.movies = movies;
      },
      rej => {
        console.log(rej);
      }
    );
  }

}
