import { CanActivate, CanActivateChild } from '@angular/router';

export class AutenticacionGuard implements CanActivate, CanActivateChild {
  canActivate(): boolean {
    return false
  }

  canActivateChild(): boolean {
    return false
  }
}
