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
  openEditTaskSubscription: Subscription;
  closeEditTaskSubscription: Subscription;
  constructor(private UIservice: UiService, private appRouter: Router) {
    this.toggleShowAddTaskSubscription = UIservice.toggleAddFormSubjectMultiCaster().subscribe((b) => this.showAddTaskButton = b );
    this.openEditTaskSubscription = UIservice.openEditFormSubjectMultiCaster().subscribe(newValue => this.showEditTaskButton = newValue);
    this.closeEditTaskSubscription = UIservice.closeEditFormSubjectMultiCaster().subscribe(newValue => this.showEditTaskButton = newValue);
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
