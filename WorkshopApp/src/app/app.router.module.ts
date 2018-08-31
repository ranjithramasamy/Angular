import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page.not.found.component';
import {HomeComponent} from './home/home.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {SessionsComponent} from './sessions/sessions.component';
import {SpeakersComponent}  from './speakers/speakers.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRouterModule {
}
