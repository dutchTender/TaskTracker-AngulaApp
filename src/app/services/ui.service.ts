import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UIFlag} from '../UIFlag';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTaskForm = false;
  private addTaskFormToggleSubject = new Subject<boolean>();
  addTaskFormToggle$: Observable<boolean> = this.toggleAddFormSubjectMultiCaster();

  private addTaskButtonFlag: UIFlag = {
    show: true
  };
  private addTaskButtonToggleSubject = new BehaviorSubject<UIFlag>(this.addTaskButtonFlag);
  addTaskButtonToggle$: Observable<UIFlag> = this.addTaskButtonToggleSubject.asObservable();

  private showEditTaskForm = false;
  private editTaskFormToggleSubject = new Subject<boolean>();
  editTaskFormToggle$: Observable<boolean> = this.toggleEditFormSubjectMultiCaster();
  constructor() { }
  toggleAddForm(): void{
    this.showAddTaskForm = !this.showAddTaskForm;
    this.addTaskFormToggleSubject.next(this.showAddTaskForm);
  }
  toggleAddButton(): void{
    this.addTaskButtonFlag.show = !this.addTaskButtonFlag.show;
    this.addTaskButtonToggleSubject.next(this.addTaskButtonFlag);
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

