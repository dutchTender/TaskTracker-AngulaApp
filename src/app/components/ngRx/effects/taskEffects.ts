import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TaskService} from '../../../services/task.service';
import * as taskActions from '../actions/taskActions';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class TaskAppStateEffects{

  getTasks$ = createEffect( () => this.taskActions$.pipe(
      ofType(taskActions.getTasks), mergeMap( () => {
        return this.taskService.getTasksFromService().pipe(
          map((userTasks) => taskActions.getTasksSuccess({userTasks})),
          catchError( (taskErrors) => of(taskActions.getTasksFailure({taskErrors}))  )
        );
      })
    )
  );

  constructor(private taskService: TaskService, private taskActions$: Actions) {
  }
}
