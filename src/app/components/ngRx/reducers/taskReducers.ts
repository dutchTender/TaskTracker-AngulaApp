import {TaskAppState} from '../state/AppGlobalState';
import {createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/taskActions';

export const initialState: TaskAppState = {
  error: null, focusedTask: {text: '', reminder: false, day: '' },
  taskList: [], uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false},
  isLoading: false
};

export const taskReducer = createReducer(initialState,
  on( TaskActions.getTasks, (currentState) => (
    {...currentState, isLoading: true }
  )),
  on( TaskActions.getTasksSuccess, (currentState, taskAction) => (
    {...currentState,  taskList: taskAction.userTasks,
      uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false}, error: null, isLoading: false }
  )),
  on( TaskActions.getTasksFailure, (currentState, taskAction) => (
    {...currentState, uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false},
      error: taskAction.taskErrors, isLoading: false}
  )),
  on( TaskActions.toggleNewTaskForm, (currentState, taskAction) => (
    {...currentState, uiManager: taskAction.uiManager }
  ))
);
