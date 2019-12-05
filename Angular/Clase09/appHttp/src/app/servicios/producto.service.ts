import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	constructor(private http: HttpClient) { }

	listar() {
		this.http.get("http://clase.tibajodemanda.com/producto")
			.subscribe(
				data => console.log(data),
				error => console.log(error)
			)
	}
}
