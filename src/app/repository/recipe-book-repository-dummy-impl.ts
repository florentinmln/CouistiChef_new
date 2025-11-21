import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { RecipeBookRepository } from './recipe-book-repository';
import { ignoreElements } from 'rxjs';
import { Ingredient } from '../data/ingredient';

@Injectable({
  providedIn: 'root',
})
export class RecipeBookRepositoryDummyImpl extends RecipeBookRepository {

  private ingredients: Ingredient[] =
  [
    {name : "sugar", quantity: 200},
    {name : "butter", quantity : 125},
    {name : "eggs", quantity : 2},
    {name : "flour", quantity : 200},
    {name : "baking powder", quantity : 10},
    {name : "milk", quantity : 12.5}
  ]
  
  public recettes: Recette[] = 
  [
    {name : "Simple Cake", preTime : 10, cookTime : 30, serving : 12, ingredients : this.ingredients, image : "assets/simple-white-cake.png"},
    {name : "Chocolate Cake", preTime : 15, cookTime : 25, serving : 6, ingredients : this.ingredients, image : "assets/chocolate-cake.jpg"},
    {name : "Clafoutis", preTime : 15, cookTime : 35, serving : 6, ingredients : this.ingredients, image : "assets/clafoutis.jpg"}
  ]

  public override getRecette(name: string): Recette|undefined{
    return this.recettes.find(recette => recette.name === name) as Recette;
  }
}
