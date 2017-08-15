import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @ViewChild('select') private selectModel: NgModel;
  private movies: Array<any>;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.get().subscribe(
      movies => {
        this.movies = movies;
      },
      rej => {
        console.log(rej);
      });
  }

  onSelectClear($event) {
    if (this.selectModel.dirty) {
      this.selectModel.reset('default');
    }
  }

}
