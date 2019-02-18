import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { ComputadoraInicioPage } from '../pages/computadora-inicio/computadora-inicio';
import { MantenimientoInicioPage } from '../pages/mantenimiento-inicio/mantenimiento-inicio';
import { SearchPage } from '../pages/search/search';
import { FavoritoProvider } from '../providers/favorito/favorito';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    ComputadoraInicioPage,
    MantenimientoInicioPage,
    SearchPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    ComputadoraInicioPage,
    MantenimientoInicioPage,
    SearchPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritoProvider
  ]
})
export class AppModule {}
