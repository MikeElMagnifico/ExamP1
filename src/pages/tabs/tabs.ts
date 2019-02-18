import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComputadoraInicioPage } from '../computadora-inicio/computadora-inicio';
import { MantenimientoInicioPage } from '../mantenimiento-inicio/mantenimiento-inicio';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = ComputadoraInicioPage;
  tab3 = MantenimientoInicioPage;
  tab4 = FavoritosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}