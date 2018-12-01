import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterfaceComponent } from './user-interface.component';

@NgModule({
  declarations: [UserInterfaceComponent],
  imports: [
    CommonModule
  ],
  exports : [UserInterfaceComponent]

})
export class UserInterfaceModule { }
