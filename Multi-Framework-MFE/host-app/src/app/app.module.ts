import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'remoteV14',
        component: WebComponentWrapper,
        data: {
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'remoteAppV14',
            exposedModule: './remoteAppV14-components',
            elementName: 'remote-app-v14'
        } as WebComponentWrapperOptions
    },
     {
         path: 'remoteV12',
         component: WebComponentWrapper,
         data: {
             remoteEntry: 'http://localhost:3002/remoteEntry.js',
             remoteName: 'remoteAppV12',
             exposedModule: './remoteAppV12-components',
             elementName: 'remote-app-v12'
         } as WebComponentWrapperOptions
     }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ModuleFederationToolsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
