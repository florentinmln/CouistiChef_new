import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCheckbox, IonRow, IonLabel } from '@ionic/angular/standalone';
import { RecipeBookRepository } from 'src/app/repository/recipe-book-repository';
import { Recette } from 'src/app/data/recette';
import { RecettesListComponent } from '../recettes-list/recettes-list.component';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonGrid, IonRow, IonCheckbox, RecettesListComponent, IonLabel]
})
export class RecettesPage implements OnInit {

  get recette(): Recette[]{
    return this.recipeBookRepository.recettes;
  }

  constructor(private recipeBookRepository: RecipeBookRepository) { }

  ngOnInit() {
  }

}
