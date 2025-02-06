import {createAction, props} from '@ngrx/store';
import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';

export const toggleNewTaskForm = createAction('[Tasks] Open New Task Form', props<{uiManager: UIFlag}>());
export const openEditTaskForm = createAction('[Tasks] Open Edit Task Form', props<{uiManager: UIFlag}>());

export const getTasks = createAction('[Task] Get task list');
export const getTasksSuccess = createAction('[Task] Get task success', props<{userTasks: Task[]}>());
export const getTasksFailure = createAction('[Task] Get task success', props<{taskErrors: string}>());


export const createTask = createAction('[Task] Create task');
export const createTaskSuccess = createAction('[Task] Create task success');
export const createTaskFailure = createAction('[Task] Create task failure');

export const updateTask = createAction('[Task] Update task');
export const updateTaskSuccess = createAction('[Task] Update task success');
export const updateTaskFailure = createAction('[Task] Update task failure');

export const deleteTask = createAction('[Task] Delete task');
export const deleteTaskSuccess = createAction('[Task] Delete task success');
export const deleteTaskFailure = createAction('[Task] Delete task failure');


