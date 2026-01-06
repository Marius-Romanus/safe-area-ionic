import { Component, inject } from '@angular/core';

import {
  IonButton,
  IonContent,
  IonItem,
  PopoverController,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { PopoverComponent } from './popover.component';
import { HeaderModalComponent } from './header';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  imports: [
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    HeaderModalComponent,
  ],
})
export class ModalComponent {
  popoverController = inject(PopoverController);

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
