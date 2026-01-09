import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map as mapRxjs, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  private router = inject(Router);
  private routeSignal = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      mapRxjs(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) route = route.firstChild;
        return route;
      })
    ),
    { initialValue: this.router.routerState.root }
  );
  tabsEnabled = computed(() => {
    const currentRoute = this.routeSignal();
    return currentRoute?.snapshot.data['tabs'] === true;
  });

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
