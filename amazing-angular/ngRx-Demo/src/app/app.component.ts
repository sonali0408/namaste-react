import { Component, OnInit } from '@angular/core';
import { Movie } from './Models/movies';
import { DataService } from './Service/data.service';
import { Store } from '@ngrx/store';
import { addMovies, assignUser, getMovies, logout } from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
}
