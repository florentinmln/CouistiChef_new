import { Component, Input, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton,} from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-ingredient-modification',
  templateUrl: './ingredient-modification.component.html',
  styleUrls: ['./ingredient-modification.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel, IonGrid, IngredientComponent, FormsModule, CommonModule, IonImg,
    IonButton, RouterLink ]
})
export class IngredientModificationComponent  implements OnInit {
  @Input() ingredient!: Ingredient; 
  @Input() recette!: Recette;


  onSub(){
    this.recette.serving--;
    for (let i = 0; i < this.recette.ingredients.length; ++i) {
      this.recette.ingredients[i].quantity = (this.recette.ingredients[i].quantity * this.recette.serving)/(this.recette.serving + 1)
    }
  }

  onAdd(){
    this.recette.serving++;
    for (let i = 0; i < this.recette.ingredients.length; ++i) {
      this.recette.ingredients[i].quantity = (this.recette.ingredients[i].quantity * this.recette.serving)/(this.recette.serving - 1)
    }
  }

  constructor() { }

  ngOnInit() {}

}
