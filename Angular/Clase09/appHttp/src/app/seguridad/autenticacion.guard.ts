import { AuthService } from '../servicios/auth.service';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild {
	constructor(private auth: AuthService, private router: Router) { }

	canActivate(): boolean {
		const logueado = this.auth.estaLogueado()

		if (logueado) return logueado

		this.router.navigate([""])
		return logueado
	}

	canActivateChild(): boolean {
		return false
	}
}
