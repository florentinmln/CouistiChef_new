import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonButton, IonButtons, IonBackButton, IonRow, IonCol } from '@ionic/angular/standalone';
import { Recette } from 'src/app/data/recette';
import { RecipeBookRepository } from 'src/app/repository/recipe-book-repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revenue-modification',
  templateUrl: './revenue-modification.page.html',
  styleUrls: ['./revenue-modification.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,
    IonGrid, IonButtons, IonBackButton, IonRow, IonCol
  ]
})
export class RevenueModificationPage implements OnInit {
  recette: Recette|undefined = undefined


  constructor(private recipeBookRepository: RecipeBookRepository, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null){
      this.recette = this.recipeBookRepository.getRecette(name);
    }
  }

}
