import { Component, OnInit, Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Task} from '../interfaces/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  constructor() { }

  @Input() task: Task;
  @Output() deleteTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() openEditTaskFormEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  timeIcon = faTimes;

  protected readonly faTimes = faTimes;
  ngOnInit(): void {
  }
  onDelete(): void{
    this.deleteTaskEmitter.emit(this.task);
  }

  openUpdateTaskForm(): void{ // we need to cast an even to tasks list. similar to how add button cast and event to tasks list
    this.openEditTaskFormEmitter.emit(this.task);
  }
}
