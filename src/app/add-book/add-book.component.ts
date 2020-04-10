import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CreateBookService } from '../create-book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookToLibraryForm = this.fb.group({
    BooksName: ['', [Validators.minLength(3), Validators.required]],
    AuthorName: ['', Validators.required],
    // Isbn: ['', Validators.required],
    // BookPrice: ['', Validators.required],
});

  constructor(private fb: FormBuilder, private createBookService: CreateBookService ) { }

  get bookname() {
    return this.addBookToLibraryForm.get('BooksName');
  }

  onSubmit() {
    console.warn(this.addBookToLibraryForm.value);
    this.createBookService.create(this.addBookToLibraryForm.value)
    .subscribe(
      data => console.log('Success data', data),
      error => console.error('Error', error)
    );



  }
  ngOnInit(): void {

  }

}
