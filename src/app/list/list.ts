import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonPopover,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
} from '@ionic/angular/standalone';
import { HeaderComponent } from './header';

@Component({
  selector: 'app-list',
  templateUrl: 'list.html',
  imports: [
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonItemGroup,
    IonItemDivider,
    HeaderComponent,
  ],
})
export class List {}
