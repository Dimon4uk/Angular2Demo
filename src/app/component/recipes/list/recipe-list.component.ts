import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {Recipe} from "../../../model/recipe";
import {RecipeItemComponent} from "./recipe-item.component";
import {DataService} from "../../../service/data.service";

@Component({

  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  viewProviders: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: DataService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  AddRecipe() {
    this.recipeService.AddRecipe([new Recipe("testdfg", "12",'vk.com/feeds')])

  }

}
