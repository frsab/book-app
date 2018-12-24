import { AppModule } from './app.module';
import { BookModule } from './book/book.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UserInterfaceComponent } from './user-interface/user-interface/user-interface.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'book-component', component: BookComponent },
  { path: 'ui-component', component: UserInterfaceComponent }  ,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(  routes,  { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
