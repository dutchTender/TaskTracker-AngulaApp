import {TaskAppState} from '../state/AppGlobalState';
import {createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/taskActions';

export const initialState: TaskAppState = {
  error: '', focusedTask: {text: '', reminder: false, day: '' }, taskList: [], uiManager: {showAdd: true, showEdit: false, isLoading: false}
};

export const taskReducer = createReducer(
  initialState,
  on( TaskActions.getTasks, (currentState) => (
    {...currentState, uiManager: {showAdd: true, showEdit: false, isLoading: true} }
  )),
  on( TaskActions.getTasksSuccess, (currentState, taskAction) => (
    {...currentState,  taskList: taskAction.userTasks, uiManager: {showAdd: true, showEdit: false, isLoading: false} }
  )),
  on( TaskActions.getTasksFailure, (currentState, taskAction) => (
    {...currentState, error: taskAction.tasksError, uiManager: {showAdd: true, showEdit: false, isLoading: false}}
  )),
);
