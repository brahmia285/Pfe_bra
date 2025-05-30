import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { AuthenticationService } from '../services/auth.service';

import { AuthfakeauthenticationService } from '../services/authfake.service';


import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    constructor(

        private router: Router,

        private authenticationService: AuthenticationService
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        

        const currentUser = localStorage.getItem("token");

        if (currentUser) {

                // logged in so return true

                return true;

            }

        

        // not logged in so redirect to login page with the return url

        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });

        return false;

    }

}