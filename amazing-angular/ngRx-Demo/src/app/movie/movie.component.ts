import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MovieState } from '../Store/Reducers/movie.reducer';
import { Movie } from '../Models/movies';
import { of } from 'rxjs';
import {
  greater,
  movie,
  movieSelector,
  movieUserSelector,
} from '../Store/Selector/movie.selector';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie$ = this.store.pipe(select(movie));
  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {}
}
