import {Component, inject} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    standalone: false
})
export class HomeComponent {
    private readonly oidcSecurityService = inject(OidcSecurityService);

    userData$ = this.oidcSecurityService.userData$;

    isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
    
    constructor(private http: HttpClient) {
    }
    
    signin(){
        this.oidcSecurityService.authorize();
    }
    
    signout(){
        this.oidcSecurityService
            .logoff()
            .subscribe((result) => console.log(result));
    }

    makeApiCall()
    {
        return this.http.get<any>('https://localhost:7128/api/secret-endpoint').pipe(
            catchError(error => {
                console.error('Error in API call:', error);
                return of({});
            })
        ).subscribe();
    }

    protected readonly JSON = JSON;
}
