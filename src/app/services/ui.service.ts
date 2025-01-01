import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTaskForm = false;
  private addTaskFormToggleSubject = new Subject<any>();
  addTaskFormToggle$ = this.toggleAddFormSubjectMultiCaster();

  private showEditTaskForm = false;
  private editTaskFormToggleSubject = new Subject<any>();
  editTaskFormToggle$ = this.toggleEditFormSubjectMultiCaster();
  constructor() { }
  toggleAddForm(): void{
    this.showAddTaskForm = !this.showAddTaskForm;
    this.addTaskFormToggleSubject.next(this.showAddTaskForm);
  }
  toggleAddFormSubjectMultiCaster(): Observable<any>{
    return this.addTaskFormToggleSubject.asObservable();
  }

  toggleEditFormSubjectMultiCaster(): Observable<any>{
    return this.editTaskFormToggleSubject.asObservable();
  }

  openEditForm(): void{
    this.showEditTaskForm = true;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

  closeEditForm(): void{
    this.showEditTaskForm = false;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

}

