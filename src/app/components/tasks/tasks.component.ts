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

  deleteTask(task:Tasks){
    this.taskService.deleteTask(task).subscribe(()=> {
      this.tasks=this.tasks.filter(t=> t.id !==task.id);
    });
  }

  toggleReminder(task:Tasks){
    task.reminder=!task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task:Tasks){
    this.taskService.addTask(task).subscribe((tasks)=> {
      this.tasks.push(task)
    });
  }

}
