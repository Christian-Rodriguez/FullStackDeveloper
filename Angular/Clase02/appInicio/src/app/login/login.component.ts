import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onCambiar: EventEmitter<any> = new EventEmitter()

  correo: string

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.onCambiar.emit(this.correo)
  }

  capturar(evt) {
    // console.log("se ejecutó")
    console.log(evt.target.value)

    this.correo = evt.target.value
  }

}
