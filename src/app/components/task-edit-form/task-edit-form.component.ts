import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {

  @Input() taskText: string;
  @Input() taskDay: string;
  @Input() taskReminder: boolean;

  showTaskEditForm: boolean;
  constructor(private UIService: UiService) {
    UIService.openEditFormSubjectMultiCaster().subscribe( newValue => this.showTaskEditForm = newValue);
    UIService.closeEditFormSubjectMultiCaster().subscribe( newValue => this.showTaskEditForm = newValue);
  }

  ngOnInit(): void {

  }
  checkTaskReminderValue(): void{
    alert(this.taskReminder);
  }

}
