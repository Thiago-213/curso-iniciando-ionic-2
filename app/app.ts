import {Component} from '@angular/core';
import {Platform, ionicBootstrap,MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';


import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {ConnectionService} from './providers/connection-service/connection-service';



@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component:any,title: string,icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl:MenuController) {
    this.pages = [

    {component: HomePage, title: 'Home', icon: 'home'},
    {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
    {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'},
    {component: AlertPage, title: 'Alert', icon: 'alert'},
    {component: ButtonTestPage, title: 'Button', icon: 'button'},
    {component: CardTestPage, title: 'Card Test', icon:'card' },
    {component: IconTestPage, title: 'Icon Test', icon:'' }






  ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void{
    this.rootPage=page.component;
    this.menuCtrl.close(menuSide);
  }
}

ionicBootstrap(MyApp, [ConnectionService],{

  menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
});
