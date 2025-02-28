import {UserAppState} from '../state/AppGlobalState';
import {createReducer, on} from '@ngrx/store';
import * as TaskActions from '../actions/taskActions';

export const initialState: UserAppState = {
  deletedUser: undefined,
  error: '',
  focusedUser: undefined,
  isLoading: false,
  uiManager: undefined,
  users: []
};
export const userReducer = createReducer(initialState,
  on( TaskActions.getTasks, (currentState) => (
    {
      ...currentState,
      isLoading: true
    }
  ))
);

