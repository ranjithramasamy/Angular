import { BrowserModule } 			from '@angular/platform-browser';
import { BrowserAnimationsModule } 	from '@angular/platform-browser/animations';
import { NgModule } 				from '@angular/core';
import { FormsModule }    			from '@angular/forms';
import { HttpClientModule } 		from '@angular/common/http';

import { MaterialModule }    		from './material.module';
import { AppRouterModule } 			from './app.router.module';

import { AppComponentMain } 		from './app.component';
import { AppComponentMainService } 	from './app.component.service';
import { PageNotFoundComponent } 	from './page.not.found.component';
import { HomeComponent }     		from './home/home.component';
import { ScheduleComponent }     	from './schedule/schedule.component';
import { SessionsComponent }     	from './sessions/sessions.component';
import { SpeakersComponent }     	from './speakers/speakers.component';
import { RegisterComponent } 		from './register/register.component';

@NgModule({
  declarations: [
	AppComponentMain, HomeComponent, PageNotFoundComponent,
	ScheduleComponent, SessionsComponent, SpeakersComponent,
	RegisterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, AppRouterModule,
    FormsModule, HttpClientModule
  ],
  entryComponents: [RegisterComponent],
  exports: [],
  providers: [AppComponentMainService],
  bootstrap: [AppComponentMain]
})

export class AppModule { }
