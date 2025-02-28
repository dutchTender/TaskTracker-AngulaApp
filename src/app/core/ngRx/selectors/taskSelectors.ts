import {createSelector} from '@ngrx/store';
import {TaskAppStateWrapper} from '../state/AppGlobalStateWrapper';
import {Task, taskStoreAdapter} from '../../interfaces/Task';

export const taskFeatureSlice = (dataState: TaskAppStateWrapper) =>  dataState.taskAppData;

export const taskLoadingSelector = createSelector(
    taskFeatureSlice,
   (dataState) => dataState.isLoading
);

export const taskListSelector = createSelector(
  taskFeatureSlice,
  taskStoreAdapter.getSelectors().selectAll
);

export const taskErrorSelector = createSelector(
  taskFeatureSlice,
  (dataState) => dataState.error
);

export const uiManagerSelector = createSelector(
  taskFeatureSlice,
  (dataState) => dataState.uiManager
);

export const focusedTaskSelector = createSelector(
  taskFeatureSlice,
  (dataState): Task => {
        return {
          day: dataState.focusedTask.day,
          id: dataState.focusedTask.id,
          reminder: dataState.focusedTask.reminder,
          text: dataState.focusedTask.text
        };
  }
);




