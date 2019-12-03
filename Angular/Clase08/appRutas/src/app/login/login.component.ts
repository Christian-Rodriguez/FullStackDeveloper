import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultados = []
  resultadosFotos = []

  constructor() { }

  ngOnInit() {
    const promesa: Promise<any> = new Promise((resolve, reject) => {
      const http: XMLHttpRequest = new XMLHttpRequest()
      http.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
          resolve(this.responseText)
        }
      }
      http.open("get", "https://jsonplaceholder.typicode.com/todos")
      http.send()
    })

    promesa.then(
      (data) => { this.resultados = JSON.parse(data) },
      (error) => { console.log(error) }
    )

    const promesaFotos: Promise<any> = new Promise((resolve, reject) => {
      const http: XMLHttpRequest = new XMLHttpRequest()
      http.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
          resolve(this.responseText)
        }
      }
      http.open("get", "https://jsonplaceholder.typicode.com/photos")
      http.send()
    })

    promesaFotos.then(
      (data) => { this.resultadosFotos = JSON.parse(data) },
      (error) => { console.log(error) }
    )

    /*  promesaFotos
       .then(
         (data) => { this.resultadosFotos = JSON.parse(data) }
       )
       .catch(
         (error) => { console.log(error) })

     promesaFotos
       .then(
         (data) => { this.resultadosFotos = JSON.parse(data) }
       )

     promesaFotos.catch(
       (error) => { console.log(error) }) */

  }

}
