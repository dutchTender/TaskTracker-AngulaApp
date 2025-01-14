import {Component} from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UIFlag} from '../../UIFlag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  title = 'Task Tracker';
  taskHeaderManager$: Observable<UIFlag>;
  constructor(private UIservice: UiService, private appRouter: Router) {
    this.taskHeaderManager$ = this.UIservice.taskHeaderButton$;
  }
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
