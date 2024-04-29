import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../Models/movies';
import { DataService } from '../Service/data.service';
import {
  getMovies,
  assignUser,
  addMovies,
  logout,
} from '../Store/Actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.store.dispatch(getMovies());
    this.store.dispatch(assignUser('Sonali'));
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    // this.dataService.addMovies(this.newMovie).subscribe(() => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }

  changeUser(): void {
    this.store.dispatch(assignUser('Sanjit'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
