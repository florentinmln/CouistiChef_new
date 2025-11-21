import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonButton, IonButtons, IonBackButton, IonRow } from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { ActivatedRoute } from '@angular/router';
import { RecipeBookRepository } from 'src/app/repository/recipe-book-repository';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonButton,
    IonButtons, IonBackButton, IonRow
  ]
})
export class RecipePage implements OnInit {

  recette: Recette|undefined = undefined


  constructor(private recipeBookRepository: RecipeBookRepository, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null){
      this.recette = this.recipeBookRepository.getRecette(name);
    }
  }

}
