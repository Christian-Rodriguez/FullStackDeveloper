import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba.component';
import { ResumenComponent } from './resumen/resumen.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AppComponent, PruebaComponent, ResumenComponent, LoginComponent, FormularioComponent, ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
