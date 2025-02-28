import {createAction, props} from '@ngrx/store';
import {User} from '../../interfaces/User';
import {UIFlag} from '../../interfaces/UIFlag';

export const toggleNewUserForm = createAction('[Tasks] Toggle New Task Form', props<{focusedUser: User, uiManager: UIFlag}>());
export const openEditUserForm = createAction('[Tasks] Open Edit Task Form', props<{focusedUser: User, uiManager: UIFlag}>());
export const closeEditUserForm = createAction('[Tasks] Close Edit Task Form', props<{focusedUser: User, uiManager: UIFlag}>());
