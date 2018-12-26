import { Component, OnInit } from '@angular/core';
import { BookModel } from '../shared/model/book-model';
import { Balise } from '../shared/interfaces/balise';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-book-recursive-balise',
  templateUrl: './book-recursive-balise.component.html',
  styleUrls: ['./book-recursive-balise.component.scss']
})
export class BookRecursiveBaliseComponent implements OnInit {
  book: BookModel = new BookModel();
  myRoot: Balise;
  ctx = { mabalise: this.myRoot };

  constructor(private bookService: BookService) {
    this.bookService.getOne().subscribe(data => {
      console.log('data bbb', data);
      this.book = data;
      this.ctx.mabalise = data.root.contenu[1];
      this.myRoot = data.root.contenu[1];
    });
  }

  ngOnInit() {}
}
