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

    const obs: Observable<Array<{}>> = Observable.create(
      (observador: Observer<Array<{}>>) => {
        const http: XMLHttpRequest = new XMLHttpRequest()
        http.onreadystatechange = function () {
          if (this.status == 200 && this.readyState == 4) {
            observador.next(JSON.parse(this.responseText))
          }
        }
        http.open("get", "https://jsonplaceholder.typicode.com/todos")
        http.send()
      }
    )

    this.suscripcion = obs.subscribe(
      mensaje => this.resultados = mensaje,
      error => console.log("Error", error),
      () => console.log("Complete", "Se terminó la chamba")
    )
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }

}
