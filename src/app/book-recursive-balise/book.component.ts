import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';
import { BookModel } from '../shared/model/book-model';
import { Balise } from '../shared/interfaces/balise';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {



  messageBooks: BookModel[];
  messageBook: BookModel;
  afficheTemplate: Boolean = false;
  myRoot: Balise; // = new Balise();// this.messageBook.root;
 ctx = {mabalise: this.myRoot};
 var1 = 1;
 unContexte = {v1: this.var1};
  changerVue() {
    console.log('click');
  }

  constructor(private bookService: BookService) {
    this.messageBook = new BookModel();
     this.bookService
     .getOne()
     .subscribe(
       data => {
       console.log('data bbb', data);
       this.messageBook =  data;
       this.ctx.mabalise = data.root.contenu[1];
       this.myRoot = data.root.contenu[1];
     });


  }

  ngOnInit() {

  }
}
