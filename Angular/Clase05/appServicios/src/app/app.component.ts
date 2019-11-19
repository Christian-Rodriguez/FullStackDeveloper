import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
// import { LogginService } from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaUsuarios: Array<string> = []
  nombreUsuario: string = ""

  obj: UsuariosService
  // objlog: LogginService

  constructor(usuarioService: UsuariosService/*, logginService: LogginService*/) {
    this.obj = usuarioService
    // this.objlog = logginService
  }

  insertar(){
    this.obj.insertarUsuario(this.nombreUsuario)
    // this.objlog.mostrarMensaje(this.nombreUsuario, 1)
  }

  listar() {
    this.listaUsuarios = this.obj.obtenerUsuarios()
    // this.objlog.mostrarMensaje("listando usuarios", 2)
  }
}
