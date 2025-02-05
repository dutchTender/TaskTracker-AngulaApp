import {createSelector} from '@ngrx/store';
import {TaskAppStateWrapper} from '../state/AppGlobalStateWrapper';

export const taskFeatureSlice = (dataState: TaskAppStateWrapper) =>  dataState.appData;

export const taskLoadingSelector = createSelector(taskFeatureSlice, (dataState) => dataState.uiManager.isLoading);

export const taskListSelector = createSelector(taskFeatureSlice, (dataState) => dataState.taskList);

export const taskErrorSelector = createSelector(taskFeatureSlice, (dataState) => dataState.error);
