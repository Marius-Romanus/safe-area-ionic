import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonPopover,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar,
    IonList,
    IonLabel,
    IonPopover,
  ],
})
export class Tab1Page {
  @ViewChild(IonModal) modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
}
