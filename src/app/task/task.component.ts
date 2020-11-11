import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;
  @Input() showTrashIcon: boolean;

  constructor(public taskService: TaskService) { }

  setTaskAsCompleted() {
    this.task.isDone = true;
    this.taskService.completedTaskArray.push(this.task);
    this.taskService.orderTasks();
  }

  deleteTask() {
    this.taskService.removeTask();
  }

}
