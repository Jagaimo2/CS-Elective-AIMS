import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./login/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private login: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              snapshot: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    return this.login.getLogin()
      .then((loggedIn: any) => {
        if(loggedIn){
          return true;
        }
        else{
          this.router.navigate(['/']);
          return false;
        }
      })
  }
}
