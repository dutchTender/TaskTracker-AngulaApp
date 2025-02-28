import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { AddTaskFormComponent } from '../../components/forms/add-task-form/add-task-form.component';
import { EditTaskFormComponent } from '../../components/forms/edit-task-form/task-edit-form.component';
import {TaskService} from '../../core/services/task.service';


@NgModule({
  declarations: [
    TaskItemComponent,
    TaskListComponent,
    AddTaskFormComponent,
    EditTaskFormComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
