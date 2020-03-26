import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookToLibraryForm = this.fb.group({
  bookname: ['', Validators.minLength(3)],
  bookISBN: ['', Validators.required],
});

  constructor(private fb: FormBuilder) { }

  get bookname() {
    return this.addBookToLibraryForm.get('bookname');
  }
  ngOnInit(): void {

  }

}
