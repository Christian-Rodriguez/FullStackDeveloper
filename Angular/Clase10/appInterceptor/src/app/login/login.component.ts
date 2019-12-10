import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';
import { Usuario } from '../modelos/usuario';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupo: FormGroup

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	login() {
		const usuario: Usuario = this.grupo.getRawValue()
		this.auth.login(usuario)
	}

}
