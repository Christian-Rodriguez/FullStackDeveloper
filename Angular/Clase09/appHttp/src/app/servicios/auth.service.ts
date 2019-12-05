import { Usuario } from '../modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

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
}
