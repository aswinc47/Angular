import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormcolrowComponent } from './formcolrow/formcolrow.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormcolrowComponent,
    LoginformComponent,
    RegisterComponent,
    DashboardComponent,
    TransactionsComponent,
    DeleteconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
