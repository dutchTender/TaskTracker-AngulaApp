import {Component, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import * as taskActions from '../ngRx/actions/taskActions';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TaskAppStateWrapper} from '../ngRx/state/AppGlobalStateWrapper';
import {taskErrorSelector, taskListSelector, taskLoadingSelector} from '../ngRx/selectors/taskSelectors';


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
  constructor(private tService: TaskService, private ngRxStore: Store<TaskAppStateWrapper>) {
  }
  ngOnInit(): void {
    this.isLoading$ = this.ngRxStore.pipe(select(taskLoadingSelector));
    this.tasks$ = this.ngRxStore.pipe(select(taskListSelector));
    this.error$ = this.ngRxStore.pipe(select(taskErrorSelector));
    this.reloadData();
  }

  taskUpdateFormOpenEventCatcher(task: Task): void{
    const focusedTask: Task = {day: '', reminder: false, text: ''};
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
    this.tService.updateTaskToService(task).subscribe((addedTask: Task) => (
      this.reloadData()
    ));
  }
  taskDeleteEventCatcher(task: Task): void{
    /* call delete service, then update component rendering via updating component property this.tasks */
    this.tService.removeTaskFromService(task).subscribe((removedTask: Task) => (
      this.reloadData()
    ));
  }
}
