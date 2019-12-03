import { CanActivate, CanActivateChild } from '@angular/router';

export class AutenticacionGuard implements CanActivate, CanActivateChild {
	canActivate(): boolean {
		return true
	}

	canActivateChild(): boolean {
		return false
	}
}
