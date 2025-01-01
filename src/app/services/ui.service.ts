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

  private tasksHeader: UIFlag = {
    showAdd: true,
    showEdit: false
  };
  private addTaskButtonToggleSubject = new BehaviorSubject<UIFlag>(this.tasksHeader);
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
    this.tasksHeader.showAdd = !this.tasksHeader.showAdd;
    this.addTaskButtonToggleSubject.next(this.tasksHeader);
  }
  toggleAddFormSubjectMultiCaster(): Observable<any>{
    return this.addTaskFormToggleSubject.asObservable();
  }

  toggleEditFormSubjectMultiCaster(): Observable<any>{
    return this.editTaskFormToggleSubject.asObservable();
  }

  openEditForm(): void{
    this.tasksHeader.showAdd = false;
    this.tasksHeader.showEdit = true;
    this.addTaskButtonToggleSubject.next(this.tasksHeader);
    this.showEditTaskForm = true;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

  closeEditForm(): void{
    this.tasksHeader.showAdd = true;
    this.tasksHeader.showEdit = false;
    this.addTaskButtonToggleSubject.next(this.tasksHeader);
    this.showEditTaskForm = false;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

}

