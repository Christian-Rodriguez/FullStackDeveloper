import { Validadores } from '../validadores';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
      correo: new FormControl(null, [Validators.required, Validators.email, Validadores.validarPorDominios(["gmail.com", "outlook.com", "hotmail.com", "yahoo.com"])]),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z]{3,5}[0-9]{4}")]),
      confirmacion: new FormControl(null, [Validators.required, Validadores.validarConfirmacionContrasena]),
      terminos: new FormControl(null, Validators.requiredTrue)
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
