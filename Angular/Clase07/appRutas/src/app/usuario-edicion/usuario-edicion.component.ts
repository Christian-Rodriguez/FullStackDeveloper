import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent implements OnInit {

  idSeleccionado: number
  categoria: string
  tema: string
  rol: string

  suscripcion: Subscription
  suscripcionQS: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idSeleccionado = +this.activatedRoute.snapshot.paramMap.get("id")

    console.log("Fuera de la suscripción", this.idSeleccionado)

    this.suscripcion = this.activatedRoute.paramMap.subscribe(
      /*
            var self = this
            function(params) {
                self.idSeleccionado
              console.log(params)
            } */
      (parametros: Params) => {
        this.idSeleccionado = parametros.params.id
        console.log("Desde una suscripción", this.idSeleccionado)
      }

    )

    this.suscripcionQS = this.activatedRoute.queryParamMap.subscribe(
      (parametros: Params) => {
        this.categoria = parametros.params.cat
      }
    )

    this.activatedRoute.fragment.subscribe((parameter) => {
      this.rol = parameter
    })

    this.categoria = this.activatedRoute.snapshot.queryParamMap.get("cat")

    this.tema = this.activatedRoute.snapshot.queryParamMap.get("tema")

    this.rol = this.activatedRoute.snapshot.fragment

    console.log(this.activatedRoute.snapshot.queryParamMap.getAll("cat"))
  }

  irAlId() {
    this.router.navigate(
      ["/usuario", "edicion", 100],
      { queryParamsHandling: "merge", queryParams: { cat: "americano" }, fragment: "operador" }
      /* { queryParams: { cat: "Literatura", tema: this.tema } } */
    ) //  /usuario/edicion/100?cat=...&tema=...
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
    this.suscripcionQS.unsubscribe()
  }

}
