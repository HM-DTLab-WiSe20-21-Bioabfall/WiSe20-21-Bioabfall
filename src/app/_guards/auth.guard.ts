import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      private authService: AuthenticationService,
      private router: Router
    ) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      if (this.authService.getCurrentUser() == null){
        this.router.navigate(['page-not-found'], { queryParams: { returnUrl: state.url }});  // {4}
        return false;
      }
      return true;
    }
  }
