import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginformComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
