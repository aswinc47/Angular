import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormcolrowComponent } from './formcolrow/formcolrow.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RightcolComponent } from './rightcol/rightcol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormcolrowComponent,
    LoginformComponent,
    RightcolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
