import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Tasks} from '../Tasks';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask():Observable<Tasks[]>{
    const tasks= of(TASKS);
    return tasks;
  }
}
