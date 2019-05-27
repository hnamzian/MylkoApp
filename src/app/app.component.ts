import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/auth/pages/login/login";
import { AuthProvider } from "../providers/auth/auth";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authProvider: AuthProvider) {
    platform.ready().then(async () => {
      let user$ = await authProvider.authByToken();
      user$.subscribe(user => {
        if (user && user.success) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
