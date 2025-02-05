import {Task} from '../../interfaces/Task';
import {UIFlag} from '../../interfaces/UIFlag';

export interface PostAppState {
  uiManager: UIFlag;
  focusedTask: Task;
  taskList: Task[];
  error: string | null;
}
