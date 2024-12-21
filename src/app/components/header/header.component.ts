import { Component, OnInit} from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTaskButton: boolean;
  toggleShowAddTaskSubscription: Subscription;

  showEditTaskButton = false;
  toggleShowEditTaskSubscription: Subscription;

  constructor(private UIservice: UiService, private appRouter: Router) {
    // tslint:disable-next-line:max-line-length
    this.toggleShowAddTaskSubscription = UIservice.toggleAddFormSubjectMultiCaster().subscribe((newValue) => this.showAddTaskButton = newValue );
    // tslint:disable-next-line:max-line-length
    this.toggleShowEditTaskSubscription = UIservice.toggleEditFormSubjectMultiCaster().subscribe(newValue => this.showEditTaskButton = newValue);

  }

  ngOnInit(): void {
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
