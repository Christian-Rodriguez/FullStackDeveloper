import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  grupo: FormGroup

  constructor() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
      confirmacion: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  registrarUsuario() {
    if (this.grupo.valid) {
      console.log("Formulario Válido")
    } else {
      console.log("Formulario inválido")
    }

  }

}
