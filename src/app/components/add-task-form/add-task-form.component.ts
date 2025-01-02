import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent{
  showAddTaskForm$: Observable<boolean>;
  newTask: Task = {
    day: '', reminder: false, text: ''
  };
  /* ---------------------------------------*/
  /* form fields */
  /* ---------------------------------------*/
  taskText: string;
  taskDay: string;
  taskReminderOption: boolean;
  /* ---------------------------------------*/
  @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIservice: UiService) {
    this.showAddTaskForm$ = UIservice.addTaskFormToggle$;
  }
  createNewTask(): void {
    this.newTask.text = this.taskText;
    this.newTask.day = this.taskDay;
    this.newTask.reminder = this.taskReminderOption;
    this.addTaskEmitter.emit(this.newTask);
    this.taskText = '';
    this.taskDay = '';
    this.taskReminderOption = false;
  }
}
