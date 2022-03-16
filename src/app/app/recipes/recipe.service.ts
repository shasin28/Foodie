import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
	//dummy -data for debugging

	/* private recipes:Recipe[]=[
        new Recipe('Lasagna','Italian American parlance',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9O0Xv_3SssvA84nweLOcKix9Yf6IJH9NlQ&usqp=CAU',
        [new Ingredient('cheese',7)
        ,new Ingredient('tomato',6)]),
        new Recipe('Burger','American parlance',
        'https://i0.wp.com/berriesandspice.com/wp-content/uploads/2017/04/Berries-and-Spice-Super-Simple-and-Incredibly-Yummy-Italian-Burger-6.jpg?fit=2675%2C1783&ssl=1',
        [new Ingredient('bun slices',2)
        ,new Ingredient('tomato',6),]),
         new Recipe('Mozzarela Pasta',
         'Italian parlance',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpP1zMRCrqcDTVepRMUjygr9yh7q84_-yFQ&usqp=CAU'
         ,[new Ingredient('mozarella cheese',2)
         ,new Ingredient('pasta ',6),])
      ];*/
	private recipes: Recipe[] = [];
	constructor(private shoppingListService: ShoppingListService) {}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}
	getRecipes() {
		return this.recipes.slice();
	}
	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}
	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
