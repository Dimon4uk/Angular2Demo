import {Injectable} from "@angular/core";
import {Recipe} from "../model/recipe";

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe("Test", "test", "https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg"),
    new Recipe("Test2", "test2", "https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg")
  ];

  getRecipes() {
    return this.recipes;
  }

  AddRecipe(newRecipes:Recipe[]) {
    Array.prototype.push.apply(this.recipes, newRecipes)
  }
}

