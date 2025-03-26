import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from '../../../../core/interfaces/Task';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {uiManagerSelector} from '../../../../core/ngRx/selectors/taskSelectors';
import {UIFlag} from '../../../../core/interfaces/UIFlag';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  showAddTaskForm$: Observable<UIFlag>;

  /* ---------------------------------------*/
  /* form fields */
  /* ---------------------------------------*/
  /*
  taskText: string;
  taskDay: string;
  taskReminderOption: boolean;
  /* ---------------------------------------*/
  @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  newTaskForm = this.formBuilder.group({
    taskText: ['', Validators.required],
    taskDay: '',
    taskReminderOption: false,
  });

  constructor(private ngRxStore: Store, private formBuilder: FormBuilder) {
  }

  createNewTask(): void {
    const newTask: Task = {
      day: null, reminder: false, text: ''
    };
    newTask.text = this.newTaskForm.value.taskText;
    console.log(this.newTaskForm.value.taskDay);
    newTask.day = this.newTaskForm.value.taskDay;
    newTask.reminder = this.newTaskForm.value.taskReminderOption;
    this.addTaskEmitter.emit(newTask);
    this.newTaskForm.reset();
  }

  ngOnInit(): void {
    this.showAddTaskForm$ = this.ngRxStore.pipe(select(uiManagerSelector));
  }
}
