import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
      customElements.define('remote-app-v14', createCustomElement(AppComponent, {injector: this.injector}));
      customElements.define('remote-app-v14-profile', createCustomElement(ProfileComponent, {injector: this.injector}));
    }
}
