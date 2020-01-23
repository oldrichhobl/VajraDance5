import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Play',
      url: '/play',
      icon: 'play'
    }
,
{
  title: 'List',
  url: '/list',
  icon: 'list'
}
,
{
      title: 'Informace',
      url: '/informace',
      icon: 'list'
    }
,
    {
      title: 'Nastavení',
      url: '/nastav',
      icon: 'list'
    }
,
    {
      title: 'Stav',
      url: '/status',
      icon: 'list'
    }
,
    {
      title: 'Mandala',
      url: '/mandala',
      icon: 'list'
    },
    {
      title: 'Konec',
      url: '/konec',
      icon: 'list'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
