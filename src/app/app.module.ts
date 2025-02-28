import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { TaskEditFormComponent } from './components/task-edit-form/task-edit-form.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';

import { environment } from '../environments/environment';
import {taskReducer} from './components/ngRx/reducers/taskReducers';
import {TaskAppStateEffects} from './components/ngRx/effects/taskEffects';





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
    TaskListComponent,
    TaskItemComponent,
    AddTaskFormComponent,
    AboutPageComponent,
    FooterPageComponent,
    TaskEditFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    ReactiveFormsModule,
    StoreModule.forRoot({appData: taskReducer}),
    EffectsModule.forRoot([TaskAppStateEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
