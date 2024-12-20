import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTaskForm = false;
  private addTaskFormToggleSubject = new Subject<any>();

  private showEditTaskForm = false;
  private editTaskFormOpenSubject = new Subject<any>();
  private editTaskFormCloseSubject = new Subject<any>();
  constructor() { }
  toggleAddForm(): void{
    this.showAddTaskForm = !this.showAddTaskForm;
    this.addTaskFormToggleSubject.next(this.showAddTaskForm);
  }
  toggleAddFormSubjectMultiCaster(): Observable<any>{
    return this.addTaskFormToggleSubject.asObservable();
  }

  openEditForm(): void{
    this.showEditTaskForm = true;
    this.editTaskFormOpenSubject.next(this.showEditTaskForm);
  }

  openEditFormSubjectMultiCaster(): Observable<any>{
    return this.editTaskFormOpenSubject.asObservable();
  }
  closeEditForm(): void{
    this.showEditTaskForm = false;
    this.editTaskFormCloseSubject.next(this.showEditTaskForm);
  }

  closeEditFormSubjectMultiCaster(): Observable<any>{
    return this.editTaskFormCloseSubject.asObservable();
  }
}

