import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBook } from './book';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/find';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService {

  constructor(private http: Http) { }
  getBooks(): Observable<IBook[]> {
    return this.http
      .get('src/api/books/books.json')
      .map((res: Response) => <IBook[]>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error}`;
    return Observable.throw(message);
  }

  public getBook(id: string): Observable<IBook> {
    return this.getBooks()
      .map((books: IBook[]) => books.find(book => book.id === id))
      .do(data => console.log(data));
  }
}
