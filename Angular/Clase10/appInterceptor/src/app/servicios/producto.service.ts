import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	constructor(private http: HttpClient, private auth: AuthService) { }

	listar() {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.get("http://clase.tibajodemanda.com/producto", { headers })
	}
}
