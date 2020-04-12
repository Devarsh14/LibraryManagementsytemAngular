import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [

  {path: 'booklist', component: ListOfBooksComponent},
  {path: '', redirectTo: 'booklist', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
