import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from '../interfaces/Task';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {focusedTaskSelector, uiManagerSelector} from '../ngRx/selectors/taskSelectors';
import {UIFlag} from '../interfaces/UIFlag';
@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  showTaskEditForm$: Observable<UIFlag>;
  updatedTask$: Observable<Task>;
  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private ngRxStore: Store) {
  }
  updateTask(): void{
     // this.editTaskEmitter.emit(this.updatedTask);
     // this will dispatch an effect
  }

  ngOnInit(): void {
    this.updatedTask$ = this.ngRxStore.pipe(select(focusedTaskSelector));
    this.showTaskEditForm$ = this.ngRxStore.pipe(select(uiManagerSelector));
  }

}
