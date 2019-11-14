import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  grupo: FormGroup

  dominiosGratuitos: Array<string> = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com"]

  constructor() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email, this.validarCorreosGratuitos.bind(this)]),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z]{3,5}[0-9]{4}")]),
      confirmacion: new FormControl(null, Validators.required),
      terminos: new FormControl(null, Validators.requiredTrue)
    })
  }

  validarCorreosGratuitos(fc: FormControl): { [s: string]: boolean } {
    if (fc && fc.value && fc.value.trim() != "" && fc.value.split("@").length > 1) {
      const dominio = fc.value.split("@")[1].toLowerCase()

      if (this.dominiosGratuitos.indexOf(dominio) > -1) {
        return { correoGratuito: true }
      }

      return null
    }

    return null
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
