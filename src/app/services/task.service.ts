import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../Task';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5500/tasks';

  constructor( private http: HttpClient) { }
  getTasksFromService(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  removeTaskFromService( task: Task): Observable<Task>{
    const url: string =  this.apiUrl + '/' + task.id;
    return this.http.delete<Task>(url);
  }

  updateTaskToService( task: Task): Observable<Task>{
    const url: string = this.apiUrl + '/' + task.id;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTaskToService( task: Task): Observable<Task>{
    const url: string = this.apiUrl;
    return this.http.post<Task>(url, task, httpOptions);
  }
}
