import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { SuplementosPage } from '../pages/suplementos/suplementos';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  username: string;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkPreviousAuthorization();

      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Cadastro', component: CadastroPage },
        { title: 'Importância do Nutricionista', component: OpcoesPage }
      ];

      this.username = window.localStorage.getItem('username');

    });
  }

  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = AuthPage;
    } else {
      this.rootPage = HomePage;
    }
  }  

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

	public logout(): void {
		window.localStorage.removeItem('username');
		window.localStorage.removeItem('password');

		this.nav.setRoot(AuthPage);
    //this.nav.popToRoot();   
    window.location.reload();
	} 	


}