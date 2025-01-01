import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {Observable, Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit, OnDestroy {
  showTaskEditForm$: Observable<boolean>;
  @Input() updatedTask: Task;
  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIService: UiService) {
    this.showTaskEditForm$ = this.UIService.editTaskFormToggle$;
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void{
  }
  updateTask(): void{
     this.editTaskEmitter.emit(this.updatedTask);
  }

}
