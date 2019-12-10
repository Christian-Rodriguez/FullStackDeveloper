import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	usuarioLogueado: boolean = false

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.usuarioLogueado = this.auth.estaLogueado()

		this.auth.onCambioEstadoUsuario.subscribe(
			estado => this.usuarioLogueado = estado
		)
	}

	logout() {
		this.auth.logout()
	}
}
