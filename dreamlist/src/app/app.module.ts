import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenusideComponent } from './components/menuside/menuside.component';
import { CalenderComponent } from './components/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenusideComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
