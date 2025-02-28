import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../interfaces/Task';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5500/tasks';
  tasksData$ = this.getTasksFromService();
  constructor( private http: HttpClient) { }
  getTasksFromService(): Observable<Task[]>{
    // @ts-ignore
    return this.http.get<Task[]>(this.apiUrl);
  }
  removeTaskFromService( task: Task): Observable<Task>{
    const url: string =  this.apiUrl + '/' + task.id;
    this.tasksData$ = this.getTasksFromService();
    return this.http.delete<Task>(url);
  }
  updateTaskToService( task: Task): Observable<Task>{
    const url: string = this.apiUrl + '/' + task.id;
    const returnValue =  this.http.put<Task>(url, task, httpOptions);
    this.tasksData$ = this.getTasksFromService();
    return returnValue;
  }
  addTaskToService( task: Task): Observable<Task>{
    const url: string = this.apiUrl;
    return this.http.post<Task>(url, task, httpOptions);
  }
}
