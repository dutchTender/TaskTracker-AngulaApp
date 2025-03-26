import { TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';


describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of tasks', () => {
    service.getTasksFromService().subscribe( result => {
      expect(result).toBeTruthy();
      console.log(result);
      expect(result.length).toBeGreaterThan(0);
    });
    const req = httpMock.expectOne('http://localhost:5500/tasks');
    req.flush(
          [
            {
              day: '2025-02-27T05:00:00.000Z',
              id: 3,
              reminder: true,
              text: 'Grocery Shopping at Asian Market'
            }
            ]
    );
  });

});
