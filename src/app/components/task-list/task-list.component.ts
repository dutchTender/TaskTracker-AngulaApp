import {Component} from '@angular/core';
import {Task} from '../interfaces/Task';
import * as taskActions from '../ngRx/actions/taskActions';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TaskAppStateWrapper} from '../ngRx/state/AppGlobalStateWrapper';
import {taskListSelector, taskLoadingSelector} from '../ngRx/selectors/taskSelectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;
  focusedTask: Task = {
    day: '', reminder: null, text: ''
  };
  constructor(private tService: TaskService, private UIService: UiService, private ngRxStore: Store<TaskAppStateWrapper>) {
    // this.tasks$ = this.tService.tasksData$;
    this.ngRxStore.dispatch(taskActions.getTasks());
    this.isLoading$ = this.ngRxStore.pipe(select(taskLoadingSelector));
    this.tasks$ = this.ngRxStore.pipe(select(taskListSelector));
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
      this.tasks$ = this.tService.tasksData$
    ));
  }
  taskUpdateEventCatcher(task: Task): void{
    this.tService.updateTaskToService(task).subscribe((addedTask: Task) => (
      this.tasks$ = this.tService.tasksData$
    ));
  }
  taskDeleteEventCatcher(task: Task): void{
    /* call delete service, then update component rendering via updating component property this.tasks */
    this.tService.removeTaskFromService(task).subscribe((removedTask: Task) => (
      this.tasks$ = this.tService.tasksData$
    ));
  }
}
