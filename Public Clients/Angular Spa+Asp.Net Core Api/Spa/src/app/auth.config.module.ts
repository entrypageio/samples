import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
    imports: [
        CommonModule,
        AuthModule.forRoot({
            config: {
                authority: 'https://localhost:5555',
                redirectUrl: window.location.origin,
                clientId: 'demo-entrypage-io',
                scope: 'openid profile email',
                responseType: 'code',
                secureRoutes: ['https://localhost:7128'], // adds tokens to the request
                logLevel: LogLevel.Debug,
            }
        })
    ],
    exports: [AuthModule]
})
export class AuthConfigModule { }