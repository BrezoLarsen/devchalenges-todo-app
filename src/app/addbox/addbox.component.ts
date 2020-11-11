import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-addbox',
  templateUrl: './addbox.component.html',
  styleUrls: ['./addbox.component.scss']
})
export class AddboxComponent {

  taskName: string;
  counter: number = 0;

  constructor(private taskService: TaskService) { }

  addTask() {
    const task: Task = {
      id: this.counter,
      name: this.taskName,
      isDone: false
    }
    this.taskService.addTask(task);
    this.taskName = '';
    this.counter++;
    this.taskService.orderTasks();
  }

}
