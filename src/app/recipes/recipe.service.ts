import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe1', 
  //     'This is simply a Test1', 
  //     'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_960_720.jpg',
  //     [
  //       new Ingredient('Tomato',1),
  //       new Ingredient('Onion',2),
  //       new Ingredient('Buns',1)
  //     ]),
  //   new Recipe(
  //     'A test Recipe2', 
  //     'This is simply a Test2', 
  //     'https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg',
  //     [
  //       new Ingredient('Olive',20),
  //       new Ingredient('Tomato',1),
  //       new Ingredient('PineApple',1)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe) {
    this.recipes[index]=  newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}