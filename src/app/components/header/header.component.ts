import {Component, OnInit} from '@angular/core';
import {uiManagerSelector} from '../ngRx/selectors/taskSelectors';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UIFlag} from '../interfaces/UIFlag';
import {select, Store} from '@ngrx/store';
import * as taskActions from '../ngRx/actions/taskActions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  taskHeaderManager$: Observable<UIFlag>; // this will be reset to ngRx selector
  constructor(private appRouter: Router, private ngRxStore: Store) {
  }

  OpenNewTaskFormEventCatcher(): void {
    this.ngRxStore.dispatch(taskActions.toggleNewTaskForm({
      focusedTask: null,
      uiManager: {showAddButton: false, showAddTaskForm: true, showEdit: false } }));
  }
  closeNewTaskFormEventCatcher(): void {
    this.ngRxStore.dispatch(taskActions.toggleNewTaskForm({
      focusedTask: null,
      uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false } }));
  }
  closeEditFormEventCatcher(): void{
    this.ngRxStore.dispatch(taskActions.closeEditTaskForm({
      focusedTask: null,
      uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false } }));
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }

  ngOnInit(): void {
    this.taskHeaderManager$ = this.ngRxStore.pipe(select(uiManagerSelector));
  }
}
