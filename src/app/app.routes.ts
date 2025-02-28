import {Routes} from '@angular/router';
import {TaskListComponent} from './feature/task/task-list/task-list.component';
import {AboutPageComponent} from './components/about-page/about-page.component';

export  const appRoutes: Routes = [
  {
    path: 'tasks', component: TaskListComponent
  },
  {
    path: '', redirectTo: 'tasks', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutPageComponent
  }
];
