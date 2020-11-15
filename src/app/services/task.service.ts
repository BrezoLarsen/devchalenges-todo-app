import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  public taskArray: any;
  public completedTaskArray: any = [];

  constructor(private localStorage: LocalStorageService) { }

  getTasks() {
    if (this.localStorage.get('task') !== null) {
      this.taskArray = this.localStorage.get('task');
      this.completedTaskArray = this.taskArray;
    } else {
      this.taskArray = [];
    }
  }

  addTask(task) {
    this.taskArray.push(task);
    this.localStorage.set('task', this.taskArray);
  }

  removeTask() {
    const result = this.completedTaskArray.filter(task => {
      return this.completedTaskArray.indexOf(task) > -1;
    });
    this.completedTaskArray.splice(result, 1);
  }

  deleteAllTasks() {
    this.completedTaskArray = [];
  }

  orderTasks() {
    this.taskArray.sort((a, b) => (a.isDone > b.isDone) ? 1 : -1);
  }

  setTaskAsDone(task) {
    this.completedTaskArray.push(task);
    this.orderTasks();
    const taskFromInternalStorage = this.localStorage.get('task');
    taskFromInternalStorage[task.id].isDone = true;
    this.localStorage.set('task', taskFromInternalStorage);
    this.completedTaskArray = this.localStorage.get('task');
  }

}
