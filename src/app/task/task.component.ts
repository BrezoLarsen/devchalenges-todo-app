import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() isDone: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.taskService.removeTask();
  }

}
