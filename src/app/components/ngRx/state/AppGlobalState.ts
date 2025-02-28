import {Task} from '../../../core/interfaces/Task';
import {UIFlag} from '../../../core/interfaces/UIFlag';
import {EntityState} from '@ngrx/entity';

export interface TaskAppState extends EntityState<Task> {
  uiManager: UIFlag;
  focusedTask: Task;
  isLoading: boolean;
  deletedTask: Task;
  error: string | null;
}
