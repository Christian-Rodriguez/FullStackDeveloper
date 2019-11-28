import { CanActivate } from '@angular/router';

export class AutorizationGuard implements CanActivate {
  canActivate(): boolean {
    return true
  }
}
