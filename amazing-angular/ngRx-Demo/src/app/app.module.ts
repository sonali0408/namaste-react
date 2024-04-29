import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer, userReducer } from './Store/Reducers/movie.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './app.material.module';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './Service/in-memory.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './Store/Effects/movie.effects';
import { metaReducers, reducers } from './Store/reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { RouterSerializer } from './Store/routerSerializer';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomeComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([MovieEffects]),
    //StoreRouterConnectingModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({ serializer: RouterSerializer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
