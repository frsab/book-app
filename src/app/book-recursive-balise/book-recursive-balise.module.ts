import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRecursiveBaliseComponent } from './book-recursive-balise.component';
import { BaliseComponent } from './balise/balise.component';



@NgModule({
  declarations: [
    BookRecursiveBaliseComponent,
    BaliseComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [BookRecursiveBaliseComponent]

})
export class BookRecursiveBaliseModule { }
