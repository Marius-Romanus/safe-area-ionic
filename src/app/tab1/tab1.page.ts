import { Component, inject, ViewChild } from '@angular/core';
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
  ModalController,
  IonRouterOutlet,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonIcon,
} from '@ionic/angular/standalone';
import { ModalComponent } from './modal.component';
import { RouterLink } from '@angular/router';

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
    RouterLink,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonIcon,
  ],
})
export class Tab1Page {
  modalController = inject(ModalController);
  private ionRouterOutlet = inject(IonRouterOutlet);

  @ViewChild(IonModal) modal!: IonModal;

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      presentingElement: this.ionRouterOutlet.parentOutlet?.nativeEl,
    });
    return await modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
}
