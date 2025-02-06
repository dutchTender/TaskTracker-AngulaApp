import {Component, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import * as taskActions from '../ngRx/actions/taskActions';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
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
  focusedTask: Task = {
    day: '', reminder: null, text: ''
  };

  private reloadData(): void{
    this.ngRxStore.dispatch(taskActions.getTasks());
    this.isLoading$ = this.ngRxStore.pipe(select(taskLoadingSelector));
    this.tasks$ = this.ngRxStore.pipe(select(taskListSelector));
    this.error$ = this.ngRxStore.pipe(select(taskErrorSelector));
  }
  constructor(private tService: TaskService, private UIService: UiService, private ngRxStore: Store<TaskAppStateWrapper>) {
  }
  taskUpdateFormOpenEventCatcher(task: Task): void{
    this.focusedTask.day = task.day;
    this.focusedTask.text = task.text;
    this.focusedTask.reminder = task.reminder;
    this.focusedTask.id = task.id;
    this.UIService.openEditForm();
  }
  taskAddEventCatcher(task: Task): void{
    this.tService.addTaskToService(task).subscribe((addedTask: Task) => (
      this.reloadData()
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
