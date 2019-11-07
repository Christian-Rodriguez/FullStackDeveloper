import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar: boolean = true
  correo: string

  /* usuarios: Array<string> */
  usuarios: string[] = ["Carmela", "Alfredo", "Oscar", "Marcela"]

  // for(let indice=0; indice<usuarios.length; indice++)
  // usuarios.forEach(nombre => console.log(nombre))
  // for(let nombre of usuarios) {console.log(nombre)}
  // *ngFor="let nombre of usuarios"  {{nombre}}


  fecha = new Date()

  cambiar(correo: string) {
    this.correo = correo
    console.log(correo)
    this.mostrar = !this.mostrar
  }
}
