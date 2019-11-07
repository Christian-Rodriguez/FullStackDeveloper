import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreUsuario: string

  @Output() onAgregar = new EventEmitter()

  constructor() { }

  nombre(valor) {
    this.nombreUsuario = valor
  }

  agregar() {
    this.onAgregar.emit(this.nombreUsuario)
  }

  ngOnInit() {
  }

}
