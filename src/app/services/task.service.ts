import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  public taskArray: any = [];
  public completedTaskArray: any = [];

  constructor() { }

  orderTasks() {
    this.taskArray.sort((a, b) => (a.isDone > b.isDone) ? 1 : -1);
  }

  addTask(task) {
    this.taskArray.push(task);
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

}
