import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AuthModule } from "../pages/auth/auth.module";
import { DairyModule } from "../pages/dairy/dairy.module";
import { DevicesModule } from "../pages/devices/devices.module";
import { EmployeesModule } from "../pages/employees/employees.module";
import { GoatsModule } from "../pages/goats/goats.module";
import { UserModule } from "../pages/user/user.module";
import { CoreModule } from "../pages/core/core.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), AuthModule, DairyModule, DevicesModule, EmployeesModule, GoatsModule, UserModule, CoreModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
