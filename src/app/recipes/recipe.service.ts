import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe1', 
      'This is simply a Test1', 
      'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_960_720.jpg',
      [
        new Ingredient('Tomato',1),
        new Ingredient('Onion',2),
        new Ingredient('Buns',1)
      ]),
    new Recipe(
      'A test Recipe2', 
      'This is simply a Test2', 
      'https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg',
      [
        new Ingredient('Olive',20),
        new Ingredient('Tomato',1),
        new Ingredient('PineApple',1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}