import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CreateBookService } from './create-book.service';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListOfBooksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CreateBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
