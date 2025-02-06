import {Component} from '@angular/core';
import {uiManagerSelector} from '../ngRx/selectors/taskSelectors';
import {UiService} from '../../services/ui.service';
import { Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UIFlag} from '../interfaces/UIFlag';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  title = 'Task Tracker';
  taskHeaderManager$: Observable<UIFlag>; // this will be reset to ngRx selector
  constructor(private UIService: UiService, private appRouter: Router, ngRxStore: Store) {
    this.taskHeaderManager$ = ngRxStore.pipe(select(uiManagerSelector));
  }
  toggleAddBtnEventCatcher(): void {
    // we need to dispatch either open add form, or close add form
    // otherwise we will need to implement a toggle mechanism
    this.UIService.toggleAddButton();
    this.UIService.toggleAddForm();
  }
  closeEditBtnEventCatcher(): void{
    // here we simply need to dispatch the close edit form action
    this.UIService.closeEditForm();
  }
  hasRoute(route: string): boolean{
    return this.appRouter.url === route;
  }
}
