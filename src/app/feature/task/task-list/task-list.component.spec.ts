import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { Store } from '@ngrx/store';
import {of} from 'rxjs';
import {EditTaskFormComponent} from '../forms/edit-task-form/task-edit-form.component';
import {AddTaskFormComponent} from '../forms/add-task-form/add-task-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let store: jasmine.SpyObj<Store>;
  beforeEach(async () => {

    store = jasmine.createSpyObj('store', ['select', 'dispatch', 'pipe']);
    store.select.and.returnValue(of({data: 'fake data'}));
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent, EditTaskFormComponent, AddTaskFormComponent ],
      providers: [{provide: Store, useValue: store}],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/* we need to verify that a injected mock list of tasks is rendered for the component
 we will check for the nth element to see if it exists in the html*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select data from the store', () => {
    component.ngOnInit();
    expect(store.pipe).toHaveBeenCalled();
  });
});
