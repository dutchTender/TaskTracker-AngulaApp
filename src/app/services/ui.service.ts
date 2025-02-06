import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UIFlag} from '../components/interfaces/UIFlag';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private tasksHeader: UIFlag = {
    showAddButton: true,
    showAddTaskForm: false,
    showEdit: false,
  };
  private taskHeaderManager = new BehaviorSubject<UIFlag>(this.tasksHeader);
  taskHeaderButton$: Observable<UIFlag> = this.taskHeaderManager.asObservable();

  private showAddTaskForm = false;
  private addTaskFormToggleSubject = new Subject<boolean>();
  addTaskFormToggle$: Observable<boolean> = this.toggleAddFormSubject();

  private showEditTaskForm = false;
  private editTaskFormToggleSubject = new Subject<boolean>();
  editTaskFormToggle$: Observable<boolean> = this.toggleEditFormSubject();
  private toggleAddFormSubject(): Observable<any>{
    return this.addTaskFormToggleSubject.asObservable();
  }
  private toggleEditFormSubject(): Observable<any>{
    return this.editTaskFormToggleSubject.asObservable();
  }
  constructor() { }
  toggleAddForm(): void{
    this.showAddTaskForm = !this.showAddTaskForm;
    this.addTaskFormToggleSubject.next(this.showAddTaskForm);
  }
  toggleAddButton(): void{
    this.tasksHeader.showAddButton = !this.tasksHeader.showAddButton;
    this.taskHeaderManager.next(this.tasksHeader);
  }
  openEditForm(): void{
    this.tasksHeader.showAddButton = false;
    this.tasksHeader.showEdit = true;
    this.taskHeaderManager.next(this.tasksHeader);
    this.showEditTaskForm = true;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }
  closeEditForm(): void{
    this.tasksHeader.showAddButton = true;
    this.tasksHeader.showEdit = false;
    this.taskHeaderManager.next(this.tasksHeader);
    this.showEditTaskForm = false;
    this.editTaskFormToggleSubject.next(this.showEditTaskForm);
  }

}

