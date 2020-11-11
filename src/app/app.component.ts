import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeTab: number = 1;

  constructor(public taskService: TaskService) { }

  setActive(tab: number) {
    this.activeTab = tab;
    if (this.activeTab === 1) {
      this.taskService.orderTasks();
    }
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks();
  }

}
