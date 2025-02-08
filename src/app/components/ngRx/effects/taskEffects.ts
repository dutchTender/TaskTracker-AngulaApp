import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TaskService} from '../../../services/task.service';
import * as taskActions from '../actions/taskActions';
import {mergeMap, map, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class TaskAppStateEffects{
  constructor(private taskService: TaskService, private taskActions$: Actions) {
  }
  getTasks$ = createEffect( () => this.taskActions$.pipe(
    tap(action => console.log(action.type)),
      ofType(taskActions.getTasks),
      mergeMap( () => {
        return this.taskService.tasksData$.pipe(
          map((userTasks) => taskActions.getTasksSuccess({userTasks})),
          catchError( (taskErrors) => of(taskActions.getTasksFailure({taskErrors})))
        );
      })
    )
  );

  createTasks$ = createEffect( () => this.taskActions$.pipe(
      ofType(taskActions.createTask),
      mergeMap( (params) => {
        return this.taskService.addTaskToService(params.focusedTask).pipe(
          map((newTask) => taskActions.createTaskSuccess({newTask})),
          catchError( (taskErrors) => of(taskActions.createTaskFailure({taskErrors})))
        );
      })
    )
  );
}





