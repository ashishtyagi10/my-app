import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   viewSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onViewSelected(recipe: string) {
    this.viewSelected.emit(recipe);
  }
}
