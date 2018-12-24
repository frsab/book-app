import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.sercice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
//    NgxBraintreeModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    //AuthGuard,
    AlertService,
    AuthenticationService,
    //UserService,
   /*  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
 */
    // provider used to create fake backend
    //fakeBackendProvider
],

  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
