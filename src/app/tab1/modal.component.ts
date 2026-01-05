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
  ModalController,
  PopoverController,
  IonLabel,
  IonList,
  IonPopover,
} from '@ionic/angular/standalone';
import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  imports: [
    FormsModule,
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
  ],
})
export class ModalComponent {
  modalController = inject(ModalController);
  popoverController = inject(PopoverController);

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(null, 'confirm');
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
      showBackdrop: false,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
}
