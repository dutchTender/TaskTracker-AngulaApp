import {Component, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import * as taskActions from '../../components/ngRx/actions/taskActions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TaskAppStateWrapper} from '../../components/ngRx/state/AppGlobalStateWrapper';
import {taskErrorSelector, taskListSelector, taskLoadingSelector} from '../../components/ngRx/selectors/taskSelectors';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  // this will be a selector
  private reloadData(): void{
    this.ngRxStore.dispatch(taskActions.getTasks());
  }
  constructor(private ngRxStore: Store<TaskAppStateWrapper>) {
  }
  ngOnInit(): void {
    this.isLoading$ = this.ngRxStore.pipe(select(taskLoadingSelector));
    this.tasks$ = this.ngRxStore.pipe(select(taskListSelector));
    this.error$ = this.ngRxStore.pipe(select(taskErrorSelector));
    this.reloadData();
  }

  taskUpdateFormOpenEventCatcher(task: Task): void{
    const focusedTask: Task = {day: null, reminder: false, text: ''};
    focusedTask.id = task.id;
    focusedTask.reminder = task.reminder;
    focusedTask.text = task.text;
    focusedTask.day = task.day;
    this.ngRxStore.dispatch(taskActions.openEditTaskForm(
      {focusedTask, uiManager: {showAddButton: false, showAddTaskForm: false, showEdit: true}}));
  }
  taskAddEventCatcher(task: Task): void{
    this.ngRxStore.dispatch(taskActions.createTask(
      {focusedTask: task }));
  }
  taskUpdateEventCatcher(task: Task): void{
    this.ngRxStore.dispatch(taskActions.updateTask(
      {focusedTask: task }));
  }
  taskDeleteEventCatcher(task: Task): void{
    /* call delete service, then update component rendering via updating component property this.tasks */
    this.ngRxStore.dispatch(taskActions.deleteTask(
      {focusedTask: task }));
  }
}
