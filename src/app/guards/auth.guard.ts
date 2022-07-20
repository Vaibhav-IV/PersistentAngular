import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ShowRoutesByRolesService } from '../services/show-routes-by-roles.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginAuth: AuthService, private router: Router, private showRoutesService: ShowRoutesByRolesService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginAuth.isLoggedIn()) {
      if (this.showRoutesService.showRoutes(state))
        return true;
      else
        this.router.navigate(['/dashboard']);
      return true;

    }
    this.router.navigate(['/login']);
    return false;
  }

}