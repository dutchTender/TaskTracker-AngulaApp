import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import {UiService} from '../../services/ui.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {uiManagerSelector} from '../ngRx/selectors/taskSelectors';
import {UIFlag} from '../interfaces/UIFlag';
import * as taskActions from '../ngRx/actions/taskActions';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  showAddTaskForm$: Observable<UIFlag>;
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
  constructor(private ngRxStore: Store) {
  }
  createNewTask(): void {
    this.newTask.text = this.taskText;
    this.newTask.day = this.taskDay;
    this.newTask.reminder = this.taskReminderOption;
    this.addTaskEmitter.emit(this.newTask);
    this.taskText = '';
    this.taskDay = '';
    this.taskReminderOption = false;

    this.ngRxStore.dispatch(taskActions.toggleNewTaskForm({
      focusedTask: null,
      uiManager: {showAddButton: false, showAddTaskForm: true, showEdit: false} }));
  }

  ngOnInit(): void {
    this.showAddTaskForm$ = this.ngRxStore.pipe(select(uiManagerSelector));
  }
}
