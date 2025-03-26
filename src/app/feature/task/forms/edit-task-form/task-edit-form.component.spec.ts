import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskFormComponent } from './task-edit-form.component';

describe('TaskEditFormComponent', () => {
  let component: EditTaskFormComponent;
  let fixture: ComponentFixture<EditTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
