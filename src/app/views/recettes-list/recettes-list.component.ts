import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonLabel, IonImg } from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-recettes-list',
  templateUrl: './recettes-list.component.html',
  styleUrls: ['./recettes-list.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel, IonGrid, IngredientComponent, FormsModule, CommonModule, IonImg]
})
export class RecettesListComponent implements OnInit{
  @Input() recette!: Recette;

  get ingredient(): Ingredient[]{
    return this.recette.ingredients;
  }
  ngOnInit() {
  }

}
