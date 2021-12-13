import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { RegComponent } from './reg/reg.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'main', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'reg', component: RegComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
