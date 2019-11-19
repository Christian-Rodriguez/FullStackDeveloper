import { LogginService } from './loggin.service'
import { Injectable } from '@angular/core'

@Injectable()
export class UsuariosService {
  private lista: Array<string> = []
/*   logginService: LogginService

  constructor(logginService: LogginService){
    this.logginService = logginService
  } */

  constructor(private readonly logginService: LogginService) {}

  obtenerUsuarios(){
    this.logginService.mostrarMensaje("Listando usuarios", 2)
    return this.lista
  }

  insertarUsuario(nombre: string) {
    this.lista.push(nombre)
    this.logginService.mostrarMensaje(nombre, 1)
  }

}
