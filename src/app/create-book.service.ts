import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateBookService {
  url = 'https://localhost:44304/api/book';

  constructor(private http: HttpClient) { }

  create(book) {
    console.log('Message from create book service');
    console.log(book);

    return this.http.post<any>(this.url, book)

  }
}
