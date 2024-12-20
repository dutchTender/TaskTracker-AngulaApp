import { Component, OnInit} from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTask: boolean;
  toggleShowAddTaskSubscription: Subscription;
  constructor(private UIservice: UiService, private appRouter: Router) {
    this.toggleShowAddTaskSubscription = UIservice.toggleAddFormSubjectMultiCaster().subscribe((b) => this.showAddTask = b );
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  toggleBtnEventCatcher(){
    this.UIservice.toggleAddForm();
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }

}
