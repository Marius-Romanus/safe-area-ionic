import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonItemGroup,
  IonItemDivider,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-popover',
  templateUrl: 'popover.component.html',
  imports: [
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonItemGroup,
    IonItemDivider,
  ],
})
export class PopoverComponent {}
