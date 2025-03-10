import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {TaskAppStateEffects} from './core/ngRx/effects/taskEffects';
import {TaskModule} from './feature/task/task.module';
import {UserModule} from './feature/user/user.module';
import {userReducer} from './core/ngRx/reducers/userReducers';
import {taskReducer} from './core/ngRx/reducers/taskReducers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    StoreModule.forRoot({taskAppData: taskReducer, userAppData: userReducer}),
    EffectsModule.forRoot([TaskAppStateEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserAnimationsModule,
    TaskModule,
    UserModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutPageComponent,
    FooterPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
