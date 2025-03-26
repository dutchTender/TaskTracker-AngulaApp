import {Routes} from '@angular/router';
import {TaskListComponent} from './feature/task/task-list/task-list.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {UserListComponent} from './feature/user/user-list/user-list.component';

export  const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
  },
  {
    path: 'users', component: UserListComponent
  },
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutPageComponent
  }
];
