import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('First Recipe', 'Sample Test Recipe First',
      'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg' ),
    new Recipe('Second Recipe', 'Sample Test Recipe Second',
      'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg' ),
    new Recipe('Third Recipe', 'Sample Test Recipe third',
      'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg' ),
    new Recipe('Forth Recipe', 'Sample Test Recipe forth',
      'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg' )];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selection: Recipe) {
    this.selectedRecipe.emit(selection);
  }
}
