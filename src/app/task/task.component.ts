import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;
  @Input() showTrashIcon: boolean;

  constructor(public taskService: TaskService, private localStorage: LocalStorageService) { }

  setTaskAsCompleted(task) {
    this.taskService.setTaskAsDone(task);
    task.isDone = true;
  }

  deleteTask() {
    this.taskService.removeTask();
  }

}
