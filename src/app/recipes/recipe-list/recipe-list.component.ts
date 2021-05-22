import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'This is simply a Test1', 'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_960_720.jpg'),
    new Recipe('A test Recipe2', 'This is simply a Test2', 'https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
