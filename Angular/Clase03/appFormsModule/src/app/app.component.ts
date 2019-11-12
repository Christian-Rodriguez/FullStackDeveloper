import { Component, ViewChild } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("formulario", { static: false }) formRegistro: NgForm

  nombre: string = "Marcela"

  cargarData() {
    this.formRegistro.setValue({
      nombre: "Alfonso",
      correo: "elcomercio@correo.com",
      contrasena: ""
    })
  }

  cargarDataParcial() {
    this.formRegistro.form.patchValue({
      nombre: "Piero",
      correo: "piero@correo.com"
    })
  }

  resetear() {
    this.formRegistro.reset({
      nombre: "Javier"
    })
  }

  ingresar() {
    if (this.formRegistro.valid) {
      console.log("Formulario válido")
    }
    // console.log(this.formRegistro)
    // console.log(this.formRegistro.value)
  }
}
