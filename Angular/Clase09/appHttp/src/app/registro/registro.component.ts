import { AuthService } from '../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Usuario } from '../modelos/usuario';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	grupo: FormGroup

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	registrar() {
		const usuario: Usuario = this.grupo.value
		this.auth.registrar(usuario)
	}



}
