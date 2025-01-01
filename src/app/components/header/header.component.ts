import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UIFlag} from '../../UIFlag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'Task Tracker';

  toggleShowAddTaskButton$: Observable<UIFlag>;
  showEditTaskButton = false;
  toggleShowEditTaskSubscription: Subscription;

  constructor(private UIservice: UiService, private appRouter: Router) {
    this.toggleShowAddTaskButton$ = this.UIservice.addTaskButtonToggle$;
  }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    this.toggleShowEditTaskSubscription = this.UIservice.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showEditTaskButton = newValue);
  }
  ngOnDestroy(): void{
    this.toggleShowEditTaskSubscription.unsubscribe();
  }
  // tslint:disable-next-line:typedef
  toggleAddBtnEventCatcher(): void {
    this.UIservice.toggleAddButton();
    this.UIservice.toggleAddForm();
  }
  closeEditBtnEventCatcher(): void{
    this.UIservice.closeEditForm();
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }
}
