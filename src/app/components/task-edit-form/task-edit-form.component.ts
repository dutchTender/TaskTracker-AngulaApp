import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  @Input() updatedTask: Task;


  /* ---------------------------------------*/
  showTaskEditForm: boolean;
  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIService: UiService) {
    UIService.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showTaskEditForm = newValue);
  }

  ngOnInit(): void {

  }
  updateTask(): void{
     this.editTaskEmitter.emit(this.updatedTask);
  }

}
