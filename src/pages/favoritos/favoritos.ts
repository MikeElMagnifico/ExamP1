import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';
import { InfoPage } from '../info/info';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items = [];
  info = InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritoProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }
  verElemento(item){
    this.navCtrl.push(this.info , {juego: item})
  }

}
