import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: [],
  imports: [IonHeader, IonTitle, IonToolbar],
})
export class HeaderComponent {}
