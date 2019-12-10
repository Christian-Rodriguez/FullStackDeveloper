import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelos/producto';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-producto',
	templateUrl: './producto.component.html',
	styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	lista: Producto[]

	constructor(private producto: ProductoService) { }

	ngOnInit() {
		this.producto.listar()
			.subscribe((resp: any) => {
				this.lista = resp.results
			},
				error => console.log(error))
	}

}
