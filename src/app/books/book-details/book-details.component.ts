import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBook } from '../book';
import { BookService } from '../book.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: IBook;
  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
    private bookService: BookService) {
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getBook(id);
      }
    );
  }
  getBook(id: string) {
    this.bookService.getBook(id).subscribe(
      book => this.book = book,
      err => this.errorMessage = <any>err
    );
  }

  ngOnDestroy() { }
}
