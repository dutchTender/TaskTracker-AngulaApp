import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import { TaskItemComponent } from './task-item.component';
import { Component } from '@angular/core';
import {Task} from '../interfaces/Task';


/*below component is used to mock the incoming task value that is injected into this component*/
@Component({
  selector: 'app-host-component',
  template: '<app-task-item [task]="testTask"></app-task-item>t>',
})
class TaskHostComponent {
  testTask: Task =  {
    day: 'test', reminder: false, text: 'test'

  };
}
describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemComponent, TaskHostComponent],
      imports: [FontAwesomeTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create component ', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
