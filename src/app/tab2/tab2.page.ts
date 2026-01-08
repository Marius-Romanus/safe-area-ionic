import { Component } from '@angular/core';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Headertab2Component } from './header';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonCard,
    IonFab,
    IonFabButton,
    IonIcon,
    Headertab2Component,
  ],
})
export class Tab2Page {
  searchView: boolean = false;
  constructor() {}
}
