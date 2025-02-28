import {TaskAppState, UserAppState} from './AppGlobalState';

export interface TaskAppStateWrapper{
   taskAppData: TaskAppState;
   userAppData: UserAppState;
}
