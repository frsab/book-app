import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserInterfaceComponent],
  imports: [
    CommonModule
  ],
  exports : [UserInterfaceComponent]

})
export class UserInterfaceModule { }
