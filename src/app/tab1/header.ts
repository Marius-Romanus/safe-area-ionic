import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  ModalController,
  IonProgressBar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header.html',
  styleUrls: [],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonProgressBar,
  ],
})
export class HeaderModalComponent {
  modalController = inject(ModalController);

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(null, 'confirm');
  }
}
