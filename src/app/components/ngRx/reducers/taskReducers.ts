import {TaskAppState} from '../state/AppGlobalState';
import {createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/taskActions';
import {filter} from 'rxjs/operators';

export const initialState: TaskAppState = {
  error: null,
  focusedTask: {text: '', reminder: false, day: '' },
  deletedTask: {text: '', reminder: false, day: '' },
  taskList: [],
  uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false},
  isLoading: false
};

export const taskReducer = createReducer(initialState,
  on( TaskActions.getTasks, (currentState) => (
    {
      ...currentState, isLoading: true }
  )),
  on( TaskActions.getTasksSuccess, (currentState, taskAction) => (
    {
      ...currentState,  taskList: taskAction.userTasks,
      error: null, isLoading: false }
  )),
  on( TaskActions.getTasksFailure, (currentState, taskAction) => (
    {
      ...currentState,
      error: taskAction.taskErrors, isLoading: false}
  )),
  on( TaskActions.toggleNewTaskForm, (currentState, taskAction) => (
    {
      ...currentState,
      uiManager: taskAction.uiManager }
  )),
  on( TaskActions.openEditTaskForm, (currentState, taskAction) => (
    {
      ...currentState,
      focusedTask: taskAction.focusedTask,
      uiManager: taskAction.uiManager }
  )),
  on( TaskActions.closeEditTaskForm, (currentState, taskAction) => (
    {
      ...currentState,
      uiManager: taskAction.uiManager }
  )),
  on( TaskActions.createTask, (currentState, taskAction) => (
    {
      ...currentState,
      focusedTask: taskAction.focusedTask}
  )),
  on( TaskActions.createTaskSuccess, (currentState, taskAction) => (
    {
      ...currentState,
      taskList: [...currentState.taskList, taskAction.newTask],
      focusedTask: taskAction.newTask,
      uiManager: {showAddButton: false, showAddTaskForm: false, showEdit: true}
    }
  )),
  on( TaskActions.createTaskFailure, (currentState, taskAction) => (
    {
      ...currentState,
      error: taskAction.taskErrors,
      uiManager: {showAddButton: false, showAddTaskForm: true, showEdit: false} }
  )),
  on( TaskActions.updateTask, (currentState, taskAction) => (
    {
      ...currentState,
      focusedTask: taskAction.focusedTask}
  )),
  on( TaskActions.updateTaskSuccess, (currentState, taskAction) => (
    {
      ...currentState,
      uiManager: {showAddButton: false, showAddTaskForm: false, showEdit: true},
      taskList: currentState.taskList.map(
        (taskElement, index) => taskElement.id === taskAction.updatedTask.id ? taskAction.updatedTask : taskElement
      )
    }
  )),
  on( TaskActions.updateTaskFailure, (currentState, taskAction) => (
    {
      ...currentState,
      error: taskAction.taskErrors,
      uiManager: {showAddButton: false, showAddTaskForm: false, showEdit: true} }
  )),
  on( TaskActions.deleteTask, (currentState, taskAction) => (
    {
      ...currentState,
      deletedTask: taskAction.focusedTask
    }
  )),
  on( TaskActions.deleteTaskSuccess, (currentState) => (
    {
      ...currentState,
      taskList: currentState.taskList.filter( task => task.id !== currentState.deletedTask.id )
    }
  )),
  on( TaskActions.deleteTaskFailure, (currentState, taskAction) => (
    {
      ...currentState,
      error: taskAction.taskErrors
    }
  ))
);
