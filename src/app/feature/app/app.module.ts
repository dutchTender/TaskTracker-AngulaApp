import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import {TaskAppStateEffects} from '../../core/ngRx/effects/taskEffects';
import {TaskModule} from '../task/task.module';
import {userReducer} from '../../core/ngRx/reducers/userReducers';
import {taskReducer} from '../../core/ngRx/reducers/taskReducers';

import { AppComponent } from './app.component';
import {TaskListComponent} from '../task/task-list/task-list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AboutPageComponent } from '../../components/about-page/about-page.component';
import { FooterPageComponent } from '../../components/footer-page/footer-page.component';



const appRoutes: Routes = [
  {
    path: 'tasks', component: TaskListComponent
  },
  {
    path: '', redirectTo: 'tasks', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutPageComponent,
    FooterPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    StoreModule.forRoot({taskAppData: taskReducer, userAppData: userReducer}),
    EffectsModule.forRoot([TaskAppStateEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserAnimationsModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
