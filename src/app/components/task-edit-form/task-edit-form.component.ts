import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {

  /* ---------------------------------------*/
  /* form fields */
  /* ---------------------------------------*/
  @Input() taskText: string;
  @Input() taskDay: string;
  @Input() taskReminder: boolean;
  @Input() taskID: number;
  /* ---------------------------------------*/
  showTaskEditForm: boolean;
  @Output() editTaskEmitter$: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIService: UiService) {
    UIService.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showTaskEditForm = newValue);
  }
  updatedTask: Task = {
    day: '', reminder: false, text: ''
  };
  ngOnInit(): void {
  }
  updateTask(): void{
     this.updatedTask.text = this.taskText;
     this.updatedTask.day = this.taskDay;
     this.updatedTask.reminder = this.taskReminder;
     this.updatedTask.id = this.taskID;
     this.editTaskEmitter$.emit(this.updatedTask);
     this.updatedTask.text = '';
     this.updatedTask.day = '';
     this.updatedTask.reminder = false;
     this.updatedTask.id = 0;
  }

}
