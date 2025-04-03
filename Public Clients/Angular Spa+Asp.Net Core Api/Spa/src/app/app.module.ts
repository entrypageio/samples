import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {authInterceptor, EventTypes, PublicEventsService} from 'angular-auth-oidc-client';
import { filter } from 'rxjs/operators';
import { AppComponent } from './app.component';
import {HomeComponent} from "./Home/home.component";
import {AuthConfigModule} from "./auth.config.module";
import {provideHttpClient, withInterceptors} from "@angular/common/http";


@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]),
        AuthConfigModule,
    ],
    providers: [provideHttpClient(withInterceptors([authInterceptor()]))],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private readonly eventService: PublicEventsService) {
        this.eventService
            .registerForEvents()
            .pipe(
                filter((notification) => notification.type === EventTypes.ConfigLoaded)
            )
            .subscribe((config) => {
                console.log('ConfigLoaded', config);
            });
    }
}