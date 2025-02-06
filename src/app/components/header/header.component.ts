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
  addToggle = true;
  addFormToggle = false;

  constructor(private appRouter: Router, private ngRxStore: Store) {
  }
  toggleAddBtnEventCatcher(): void {
    this.addToggle = !this.addToggle;
    this.addFormToggle = !this.addFormToggle;
    this.ngRxStore.dispatch(taskActions.toggleNewTaskForm({
      uiManager: {showAddButton: this.addToggle, showAddTaskForm: this.addFormToggle, showEdit: false } }));
  }
  closeEditBtnEventCatcher(): void{
    // here we simply need to dispatch the close edit form action
    // this.UIService.closeEditForm();
    this.ngRxStore.dispatch(taskActions.closeEditTaskForm({
      focusedTask: null, uiManager: {showAddButton: true, showAddTaskForm: false, showEdit: false } }));
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }

  ngOnInit(): void {
    this.taskHeaderManager$ = this.ngRxStore.pipe(select(uiManagerSelector));
    this.taskHeaderManager$.pipe(map(taskHeaderManager => {
      this.addToggle = taskHeaderManager.showAddButton;
      this.addFormToggle = taskHeaderManager.showAddTaskForm;
    }));

  }
}
