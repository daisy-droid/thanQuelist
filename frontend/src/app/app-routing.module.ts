import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './components/journal/journal.component';
import { LoginComponent } from './components/login/login.component';
import { MenusideComponent } from './components/menuside/menuside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { TodayComponent } from './today/today.component';
// import { TodayComponent } from './components/today/today.component';

const routes: Routes = [
  {path:'journal/:id',component:JournalComponent},
  {path:'today',component:TodayComponent},
  {path:'menuside',component:MenusideComponent},
  {path:'register',component:RegisterComponent},  
  {path:'login',component:LoginComponent}, 
  {path:'',component:TodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
