import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  newTask: Task = {
    day: '', reminder: false, text: ''

  };
  taskText: string;
  taskDay: string;
  taskReminderOption = false;
  @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  showAddTask: boolean;
  toggleShowAddTaskSubscription: Subscription;
  constructor(private UIservice: UiService) {
    this.toggleShowAddTaskSubscription = UIservice.toggleAddFormSubjectMultiCaster().subscribe((newValue) => this.showAddTask = newValue );
  }

  ngOnInit(): void {
  }
  createNewTask(): void {
    this.newTask.text = this.taskText;
    this.newTask.day = this.taskDay;
    this.newTask.reminder = this.taskReminderOption;
    this.addTaskEmitter.emit(this.newTask);
    this.taskText = '';
    this.taskDay = '';
    this.taskReminderOption = false;
  }
}
