import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  helloMessage: String;
  changerVue() {
    console.log('click');
  }

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getHello().subscribe(data => {
      console.log('data a a a', data);
      this.helloMessage = data;
    });
  }
}
