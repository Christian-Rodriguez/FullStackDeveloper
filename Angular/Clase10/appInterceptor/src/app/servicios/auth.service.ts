import { Usuario } from '../modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	onCambioEstadoUsuario: Subject<boolean> = new Subject()

	constructor(private http: HttpClient, private router: Router) { }

	registrar(usuario: Usuario) {
		// Observable.create(...)
		this.http.post("http://clase.tibajodemanda.com/usuario", usuario).subscribe(
			data => {
				this.router.navigate(["/login"])
			},
			error => console.log(error)
		)
	}

	login(usuario: Usuario) {
		this.http.post("http://clase.tibajodemanda.com/usuario/login", usuario)
			.subscribe(
				(data: any) => {
					const token = data.result.token
					sessionStorage.setItem("token", token)
					this.onCambioEstadoUsuario.next(true)

					this.router.navigate(["/homeweb"])
				},
				error => console.log(error)
			)
	}

	logout() {
		this.onCambioEstadoUsuario.next(false)
		sessionStorage.clear()
		this.router.navigate([""])
	}

	estaLogueado(): boolean {
		const token = this.obtenerToken()

		if (token) return true

		return false
	}

	obtenerToken(): string {
		const token = sessionStorage.getItem("token")

		return token
	}
}
