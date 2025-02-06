import {TaskAppState} from '../state/AppGlobalState';
import {createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/taskActions';

export const initialState: TaskAppState = {
  error: null, focusedTask: {text: '', reminder: false, day: '' },
  taskList: [], uiManager: {showAdd: false, showEdit: true, isLoading: false}
};

export const taskReducer = createReducer(initialState,
  on( TaskActions.getTasks, (currentState) => (
    {...currentState, uiManager: {showAdd: true, showEdit: false, isLoading: true} }
  )),
  on( TaskActions.getTasksSuccess, (currentState, taskAction) => (
    {...currentState,  taskList: taskAction.userTasks, uiManager: {showAdd: true, showEdit: false, isLoading: false}, error: null }
  )),
  on( TaskActions.getTasksFailure, (currentState, taskAction) => (
    {...currentState, uiManager: {showAdd: true, showEdit: false, isLoading: false}, error: taskAction.taskErrors}
  )),
  on( TaskActions.toggleNewTaskForm, (currentState, taskAction) => (
    {...currentState, uiManager: taskAction.uiManager }
  ))
);
