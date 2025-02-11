import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';
import {EntityState} from '@ngrx/entity';

export interface TaskAppState extends EntityState<Task> {
  uiManager: UIFlag;
  focusedTask: Task;
  taskList: Task[];
  isLoading: boolean;
  deletedTask: Task;
  error: string | null;
}
