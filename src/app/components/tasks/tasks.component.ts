import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service'
import {Tasks} from '../../Tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Tasks[]=[];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=> this.tasks=tasks);
  }

}
