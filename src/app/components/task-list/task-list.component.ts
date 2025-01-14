import {Component} from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  tasks$: Observable<Task[]>;
  focusedTask: Task = {
    day: '', reminder: null, text: ''
  };
  constructor(private tService: TaskService, private UIService: UiService) {
    this.tasks$ = this.tService.tasksData$;
  }
  taskUpdateFormOpenEventCatcher(task: Task): void{
    this.focusedTask.day = task.day;
    this.focusedTask.text = task.text;
    this.focusedTask.reminder = task.reminder;
    this.focusedTask.id = task.id;
    this.UIService.openEditForm();
  }
  taskAddEventCatcher(task: Task): void{
    this.tService.addTaskToService(task).subscribe((addedTask: Task) => (
      this.tasks$ = this.tService.tasksData$
    ));
  }
  taskUpdateEventCatcher(task: Task): void{
    this.tService.updateTaskToService(task).subscribe((addedTask: Task) => (
      this.tasks$ = this.tService.tasksData$
    ));
  }
  taskDeleteEventCatcher(task: Task): void{
    /* call delete service, then update component rendering via updating component property this.tasks */
    this.tService.removeTaskFromService(task).subscribe((removedTask: Task) => (
      this.tasks$ = this.tService.tasksData$
    ));
  }
}
