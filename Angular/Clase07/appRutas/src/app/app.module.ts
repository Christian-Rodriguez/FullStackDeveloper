import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component'


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "homeweb", component: HomeComponent },
  {
    path: "usuario", component: UsuarioListadoComponent, children: [
 /*      { path: "", component: UsuarioListadoComponent }, */
      { path: "edicion/:id", component: UsuarioEdicionComponent },
      { path: "nuevo", component: UsuarioNuevoComponent },
    ]
  },
  { path: "cliente", component: ClienteComponent },
  { path: "**", redirectTo: "" }
  /* { path: "**", component: RutaNoEncontradaComponent } */
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    ClienteComponent,
    RutaNoEncontradaComponent,
    UsuarioListadoComponent,
    UsuarioEdicionComponent,
    UsuarioNuevoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
