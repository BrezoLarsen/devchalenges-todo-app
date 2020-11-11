import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeTab: number = 1;

  setActive(tab: number) {
    this.activeTab = tab;
  }

}
