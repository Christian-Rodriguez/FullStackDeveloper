import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba.component';
import { ResumenComponent } from './resumen/resumen.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, PruebaComponent, ResumenComponent, LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
