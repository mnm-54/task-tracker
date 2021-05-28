import { Component, OnInit, Input} from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Tasks} from "../../Tasks"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:Tasks;
  fa_times= faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
