import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedView = 'recipe';

  onViewSelected($event) {
    this.selectedView = $event;
  }
}
