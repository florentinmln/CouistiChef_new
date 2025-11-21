import { Component, Input, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton,} from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel, IonGrid, IngredientComponent, FormsModule, CommonModule, IonImg,
    IonButton, RouterLink ]
})
export class RecipeDetailsComponent  implements OnInit {
  @Input() recette!: Recette;


  constructor() { }

  ngOnInit() {}

}
