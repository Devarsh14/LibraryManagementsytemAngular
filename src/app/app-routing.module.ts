import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [

  {path: 'booklist', component: ListOfBooksComponent},
  // defautl page load  component or route empty string will redirect to booklist
  {path: '', redirectTo: 'booklist', pathMatch: 'full'},

  {path: 'addbook', component: AddBookComponent},
  // any thing which does not match will be redirect to the 404 alternative page not found
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
