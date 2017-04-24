import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  // booksInStock = 2;
  imageWidth = 100;
  showImage = true;
  favoriteMessage = '';
  books: IBook[];
  errMessage = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(books => this.books = books,
      err => this.errMessage = <any>err);
  }
  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

}
