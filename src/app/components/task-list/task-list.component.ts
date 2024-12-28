import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy{

  tasks: Task[] = [];
  focusedTask: Task = {
    day: '', reminder: null, text: ''
  };
  loadTasksFromService: Subscription;
  constructor(private tService: TaskService, private UIService: UiService) { }

  ngOnInit(): void {
    /* call get tasks service, then update component rendering via updating component property this.tasks*/
    this.loadTasksFromService = this.tService.getTasksFromService().subscribe((returnedTasks) => this.tasks = returnedTasks );
  }
  ngOnDestroy(): void{
    this.loadTasksFromService.unsubscribe();
  }
  taskDeleteEventCatcher(task: Task): void{
    /* call delete service, then update component rendering via updating component property this.tasks */
    this.tService.removeTaskFromService(task).subscribe((deletedTask) => (this.tasks = this.tasks.filter( (t: Task) => t.id !== task.id)) );
  }
  taskUpdateFormOpenEventCatcher(task: Task): void{
    this.focusedTask.day = task.day;
    this.focusedTask.text = task.text;
    this.focusedTask.reminder = task.reminder;
    this.focusedTask.id = task.id;
    this.UIService.openEditForm();
  }
  taskAddEventCatcher(task: Task): void{
    this.tService.addTaskToService(task).subscribe((addedTask: Task) => (this.tasks.push(addedTask)));
  }
  taskUpdateEventCatcher(task: Task): void{
    this.tService.updateTaskToService(task).subscribe((addedTask: Task) => (
      this.loadTasksFromService = this.tService.getTasksFromService().subscribe((returnedTasks) => this.tasks = returnedTasks )
    ));
  }

}
