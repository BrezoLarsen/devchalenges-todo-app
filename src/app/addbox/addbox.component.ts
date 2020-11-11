import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-addbox',
  templateUrl: './addbox.component.html',
  styleUrls: ['./addbox.component.scss']
})
export class AddboxComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskService.addTask();
  }

}
