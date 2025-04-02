import {Component, inject} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  private readonly oidcSecurityService = inject(OidcSecurityService);

  title = 'demo';

  ngOnInit(): void {
    this.oidcSecurityService
        .checkAuth()
        .subscribe(({ isAuthenticated, accessToken }) => {
          console.log('app authenticated', isAuthenticated);
          console.log(`Current access token is '${accessToken}'`);
        });
  }

}
