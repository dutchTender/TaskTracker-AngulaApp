import {Component, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import * as taskActions from '../ngRx/actions/taskActions';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TaskAppStateWrapper} from '../ngRx/state/AppGlobalStateWrapper';
import {focusedTaskSelector, taskErrorSelector, taskListSelector, taskLoadingSelector} from '../ngRx/selectors/taskSelectors';


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
  focusedTask$: Observable<Task>;

  private reloadData(): void{
    this.ngRxStore.dispatch(taskActions.getTasks());
    this.isLoading$ = this.ngRxStore.pipe(select(taskLoadingSelector));
    this.tasks$ = this.ngRxStore.pipe(select(taskListSelector));
    this.error$ = this.ngRxStore.pipe(select(taskErrorSelector));
    this.focusedTask$ = this.ngRxStore.pipe(select(focusedTaskSelector));
  }
  constructor(private tService: TaskService, private UIService: UiService, private ngRxStore: Store<TaskAppStateWrapper>) {
  }

  taskUpdateFormOpenEventCatcher(task: Task): void{
    // focused task will no longer be set this way
    // we will use a local copy to create task
    // focused task will be a stream
    // this.UIService.openEditForm();
    const tempTask = {...task};
    console.log(tempTask);
    this.ngRxStore.dispatch(taskActions.openEditTaskForm(
      {focusedTask: tempTask, uiManager: {showAddButton: false, showAddTaskForm: false, showEdit: true}}));
  }
  taskAddEventCatcher(task: Task): void{
    this.tService.addTaskToService(task).subscribe((addedTask: Task) => (
      this.reloadData()
      // new logic will get the returned data set to focused data and load the edit params
    ));
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

  ngOnInit(): void {
    this.reloadData();
  }
}
