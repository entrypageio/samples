import {Component, inject} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    standalone: false
})
export class HomeComponent {
    private readonly oidcSecurityService = inject(OidcSecurityService);

    signin(){
        this.oidcSecurityService.authorize();
    }
}
