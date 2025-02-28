import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';
import {EntityState} from '@ngrx/entity';
import {User} from '../../interfaces/User';

export interface TaskAppState extends EntityState<Task> {
  uiManager: UIFlag;
  focusedTask: Task;
  isLoading: boolean;
  deletedTask: Task;
  error: string | null;
}


export interface UserAppState {
  uiManager: UIFlag;
  focusedUser: User;
  isLoading: boolean;
  users: User[];
  deletedUser: User;
  error: string | null;
}
