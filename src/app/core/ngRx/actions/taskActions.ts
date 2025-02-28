import {createAction, props} from '@ngrx/store';
import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';

export const toggleNewTaskForm = createAction('[Tasks] Toggle New Task Form', props<{focusedTask: Task, uiManager: UIFlag}>());
export const openEditTaskForm = createAction('[Tasks] Open Edit Task Form', props<{focusedTask: Task, uiManager: UIFlag}>());
export const closeEditTaskForm = createAction('[Tasks] Close Edit Task Form', props<{focusedTask: Task, uiManager: UIFlag}>());

export const getTasks = createAction('[Task] Get task list');
export const getTasksSuccess = createAction('[Task] Get task success', props<{userTasks: Task[]}>());
export const getTasksFailure = createAction('[Task] Get task success', props<{taskErrors: string}>());


export const createTask = createAction('[Task] Create task',  props<{focusedTask: Task}>());
export const createTaskSuccess = createAction('[Task] Create task success', props<{newTask: Task}>());
export const createTaskFailure = createAction('[Task] Create task failure', props<{taskErrors: string}>());

export const updateTask = createAction('[Task] Update task', props<{focusedTask: Task}>());
export const updateTaskSuccess = createAction('[Task] Update task success', props<{updatedTask: Task}>());
export const updateTaskFailure = createAction('[Task] Update task failure', props<{taskErrors: string}>());

export const deleteTask = createAction('[Task] Delete task', props<{focusedTask: Task}>());
export const deleteTaskSuccess = createAction('[Task] Delete task success', props<{deletedTask: Task}>());
export const deleteTaskFailure = createAction('[Task] Delete task failure', props<{taskErrors: string}>());


