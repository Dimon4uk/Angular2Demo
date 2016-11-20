import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from "./list/recipe-list.component";
import { RecipeDetailComponent} from "./detail/recipe-detail.component";
import {Recipe} from "../../model/recipe";

@Component({

  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  viewProviders: [RecipeListComponent, RecipeDetailComponent ]
})
export class RecipesComponent implements OnInit {
  title = "Recipes";
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
