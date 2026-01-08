import { Component, inject } from '@angular/core';

import {
  IonButton,
  IonContent,
  IonItem,
  PopoverController,
  IonLabel,
  IonList,
  IonInput,
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
    IonInput,
    HeaderModalComponent,
  ],
})
export class ModalComponent {
  popoverController = inject(PopoverController);
  items = [];

  ionViewWillEnter() {
    setTimeout(() => {
      this.items = new Array(20) as any;
    }, 500);
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
