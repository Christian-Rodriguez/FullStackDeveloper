import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Array<string> = []

  obj2: UsuariosService

  constructor(usuariosService: UsuariosService) {
    this.obj2 = usuariosService
   }

  ngOnInit() {
  }

  listar() {
     this.listaUsuarios = this.obj2.obtenerUsuarios()
  }

}
