import { Component, Input } from '@angular/core';
import { IonRow, IonCol, IonLabel } from '@ionic/angular/standalone';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel]
})
export class IngredientComponent{
  @Input() ingredient!: Ingredient;
}