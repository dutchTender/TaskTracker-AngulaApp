import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';

export interface TaskAppState {
  uiManager: UIFlag;
  focusedTask: Task;
  taskList: Task[];
  isLoading: boolean;
  error: string | null;
}
