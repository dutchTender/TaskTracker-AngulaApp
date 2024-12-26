import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';


@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  updatedTask: Task = {
    day: '', reminder: null, text: ''
  };
  /* ---------------------------------------*/
  /* form fields */
  /* ---------------------------------------*/
  @Input() taskText: string;
  @Input() taskDay: string;
  @Input() taskReminder: string;
  @Input() taskID: number;

  /* ---------------------------------------*/
  showTaskEditForm: boolean;
  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private UIService: UiService) {
    UIService.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showTaskEditForm = newValue);
  }

  ngOnInit(): void {

  }
  updateTask(): void{
     alert('current value of task reminder string : ' + this.taskReminder);
     this.updatedTask.text = this.taskText;
     this.updatedTask.day = this.taskDay;
     this.updatedTask.id = this.taskID;
     this.editTaskEmitter.emit(this.updatedTask);
     this.updatedTask.text = '';
     this.updatedTask.day = '';
     this.updatedTask.reminder = false;
     this.updatedTask.id = 0;
  }

}
