import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // return localStorage.getItem('userData') && !state.url.includes('auth') ? true : this.router.navigate(['/auth']);
        if (localStorage.getItem('userData') && !state.url.includes('auth')) {
          return true;
        } else if ( !localStorage.getItem('userData') && state.url.includes('auth') ) {
          return true;
        } else if ( !localStorage.getItem('userData') && !state.url.includes('auth') ) {
          return this.router.navigate(['/auth']);
        } else {
          return this.router.navigate(['/products']);
        }
  }

}
