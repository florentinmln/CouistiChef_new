import { Component, Input, OnInit } from '@angular/core';
import { IonRow, IonCol, IonLabel } from '@ionic/angular';
import { Recette } from 'src/app/data/recette';

@Component({
  selector: 'app-recettes-list',
  templateUrl: './recettes-list.component.html',
  styleUrls: ['./recettes-list.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonLabel]
})
export class RecettesListComponent{
  @Input() recette!: Recette;

}
