import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'Task Tracker';
  showAddTaskButton: boolean;
  toggleShowAddTaskSubscription: Subscription;

  showEditTaskButton = false;
  toggleShowEditTaskSubscription: Subscription;

  constructor(private UIservice: UiService, private appRouter: Router) {

  }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.toggleShowAddTaskSubscription = this.UIservice.toggleAddFormSubjectMultiCaster().subscribe((newValue) => this.showAddTaskButton = newValue );
    // tslint:disable-next-line:max-line-length
    this.toggleShowEditTaskSubscription = this.UIservice.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showEditTaskButton = newValue);
  }
  ngOnDestroy(): void{
    this.toggleShowAddTaskSubscription.unsubscribe();
    this.toggleShowEditTaskSubscription.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  toggleAddBtnEventCatcher(): void {
    this.UIservice.toggleAddForm();
  }
  toggleEditBtnEventCatcher(): void{
    this.UIservice.closeEditForm();
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }

}
