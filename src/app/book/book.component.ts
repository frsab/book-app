import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';
import { BookModel } from '../shared/model/book-model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  messageBooks: BookModel[];
  messageBook: BookModel;

  changerVue() {
    console.log('click');
  }

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.messageBook= new BookModel();
     this.bookService.getOne().subscribe(data => {
       console.log('data bbb', data);
          this.messageBook =  data;
     });

    //this.messageBook = this.bookService.getOne();

    // this.bookService.getHello().subscribe(data => {
    //   console.log('data a a a', data);
    //      this.messageBooks =  data[0];

    // });
  }
}
