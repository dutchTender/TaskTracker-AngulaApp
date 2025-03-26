import {Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Task} from '../../../../core/interfaces/Task';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {focusedTaskSelector, uiManagerSelector} from '../../../../core/ngRx/selectors/taskSelectors';
import {UIFlag} from '../../../../core/interfaces/UIFlag';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskFormComponent implements OnInit {
  showTaskEditForm$: Observable<UIFlag>;
  updatedTask$: Observable<Task>;

  @Output() editTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private ngRxStore: Store) {
  }
  updateTask(updatedTask: Task): void{
     this.editTaskEmitter.emit(updatedTask);
  }

  ngOnInit(): void {
    this.updatedTask$ = this.ngRxStore.pipe(select(focusedTaskSelector));
    this.showTaskEditForm$ = this.ngRxStore.pipe(select(uiManagerSelector));
  }

}
