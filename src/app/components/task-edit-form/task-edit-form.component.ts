import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit, OnDestroy {
  showTaskEditForm: boolean;
  showTaskSubscription: Subscription;
  @Input() updatedTask: Task;
  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIService: UiService) {
  }
  ngOnInit(): void {
    this.showTaskSubscription = this.UIService.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showTaskEditForm = newValue);
  }
  ngOnDestroy(): void{
    this.showTaskSubscription.unsubscribe();
  }
  updateTask(): void{
     this.editTaskEmitter.emit(this.updatedTask);
  }

}
