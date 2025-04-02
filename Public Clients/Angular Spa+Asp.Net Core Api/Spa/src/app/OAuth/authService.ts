import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client'; 

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private oidcAuthService: OidcSecurityService) {}

    login() {
        this.oidcAuthService.authorize();
    }

    logout() {
        this.oidcAuthService
            .logoff()
            .subscribe((result) => console.log(result));
    }

    isAuthenticated() {
        return this.oidcAuthService.isAuthenticated$;
    }
}
