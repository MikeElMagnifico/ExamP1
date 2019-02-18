import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  juego = {};
  imgs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritoProvider) {
    this.juego=this.navParams.get('juego');

    if(this.juego.ad.hasOwnProperty('images')){
      this.imgs = this.juego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  Favorito(elemento){
    this.fav.addFavoritos(elemento);
  }

}
