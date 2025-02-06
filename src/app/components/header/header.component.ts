import {Component, OnInit} from '@angular/core';
import {uiManagerSelector} from '../ngRx/selectors/taskSelectors';
import {UiService} from '../../services/ui.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UIFlag} from '../interfaces/UIFlag';
import {select, Store} from '@ngrx/store';
import * as taskActions from '../ngRx/actions/taskActions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  taskHeaderManager$: Observable<UIFlag>; // this will be reset to ngRx selector
  addToggle: boolean;
  setAddToggle: Subscription;
  addFormToggle: boolean;
  setAddFormToggle: Subscription;

  constructor(private UIService: UiService, private appRouter: Router, private ngRxStore: Store) {
  }
  toggleAddBtnEventCatcher(): void {
    // we need to dispatch either open add form, or close add form
    // otherwise we will need to implement a toggle mechanism
    // toggle the add button flag only. false, false on the flags. will produce the close button for add
    // this.UIService.toggleAddButton();
    this.addToggle = !this.addToggle;
    this.addFormToggle = !this.addFormToggle;
    this.ngRxStore.dispatch(taskActions.toggleNewTaskForm({
      uiManager: {showAddButton: this.addToggle, showAddTaskForm: this.addFormToggle, showEdit: false } }));
  }
  closeEditBtnEventCatcher(): void{
    // here we simply need to dispatch the close edit form action
    this.UIService.closeEditForm();
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }

  ngOnInit(): void {
    this.taskHeaderManager$ = this.ngRxStore.pipe(select(uiManagerSelector));

    this.setAddToggle = this.taskHeaderManager$.subscribe(uiManager =>
      this.addToggle = uiManager.showAddButton
    );

    this.setAddFormToggle = this.taskHeaderManager$.subscribe(uiManager =>
      this.addFormToggle = uiManager.showAddTaskForm
    );
  }
}
