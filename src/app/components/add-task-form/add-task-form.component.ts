import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit, OnDestroy {
  newTask: Task = {
    day: '', reminder: null, text: ''
  };
  /* ---------------------------------------*/
  /* form fields */
  /* ---------------------------------------*/
  taskText: string;
  taskDay: string;
  taskReminderOption: boolean;
  /* ---------------------------------------*/
  @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  showAddTask: boolean;
  toggleShowAddTaskSubscription: Subscription;
  constructor(private UIservice: UiService) {
  }
  ngOnInit(): void { /* hook for component have completed loading*/
    // tslint:disable-next-line:max-line-length
    this.toggleShowAddTaskSubscription = this.UIservice.toggleAddFormSubjectMultiCaster().subscribe((newValue) => this.showAddTask = newValue );
  }
  ngOnDestroy(): void{
    this.toggleShowAddTaskSubscription.unsubscribe();
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
