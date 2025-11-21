import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton,} from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { Ingredient } from 'src/app/data/ingredient';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recettes-list',
  templateUrl: './recettes-list.component.html',
  styleUrls: ['./recettes-list.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel, IonGrid, IngredientComponent, FormsModule, CommonModule, IonImg,
    IonButton, RouterLink ]
})
export class RecettesListComponent implements OnInit{
  @Input() recette!: Recette;

  ngOnInit() {
  }

}
