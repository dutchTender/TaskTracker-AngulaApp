import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { TaskEditFormComponent } from './components/task-edit-form/task-edit-form.component';


const appRoutes: Routes = [
  {
    path: '', component: TaskListComponent
  },
  {
    path: 'about', component: AboutPageComponent
  }
]
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
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
