import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UIFlag} from '../UIFlag';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private tasksHeader: UIFlag = {
    showAdd: true,
    showEdit: false
  };
  private taskHeaderManager = new BehaviorSubject<UIFlag>(this.tasksHeader);
  taskHeaderButton$: Observable<UIFlag> = this.taskHeaderManager.asObservable();
  private showAddTaskForm = false;
  private addTaskFormToggleSubject = new Subject<boolean>();
  addTaskFormToggle$: Observable<boolean> = this.toggleAddFormSubjectMultiCaster();
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
    this.taskHeaderManager.next(this.tasksHeader);
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
    this.taskHeaderManager.next(this.tasksHeader);
    this.showEditTaskForm = true;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }
  closeEditForm(): void{
    this.tasksHeader.showAdd = true;
    this.tasksHeader.showEdit = false;
    this.taskHeaderManager.next(this.tasksHeader);
    this.showEditTaskForm = false;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

}

