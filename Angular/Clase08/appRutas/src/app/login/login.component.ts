import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultados = []
  resultadosFotos = []

  suscripcion: Subscription

  constructor() { }

  ngOnInit() {

    const obs: Observable<string> = Observable.create(
      (observador: Observer<string>) => {
        setTimeout(() => {
          observador.next("Tocaron la puerta")
        }, 2000)

        setTimeout(() => {
          observador.next("Llegó el inspector de la empresa eléctrica")
        }, 4000)


        setTimeout(() => {
          observador.next("Vinieron sus familiares")
        }, 10000)

        setTimeout(() => {
          observador.error("Se incendió la casa")
        }, 8000)

        setTimeout(() => {
          observador.complete()
        }, 7000)
      }
    )

    this.suscripcion = obs.subscribe(
      mensaje => console.log("Mensaje", mensaje),
      error => console.log("Error", error),
      () => console.log("Complete", "Se terminó la chamba")
    )




    /* const promesa: Promise<any> = new Promise((resolve, reject) => {
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
    ) */



  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }

}
