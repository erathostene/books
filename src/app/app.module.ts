import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

import { BookService } from './books/book.service';
import { FillArrayPipe } from './shared/fill-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookListComponent,
    HighlightDirective,
    TruncatePipe,
    FavoritesComponent,
    FillArrayPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'books', component: BookListComponent },
      { path: 'book/:id', component: BookDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
