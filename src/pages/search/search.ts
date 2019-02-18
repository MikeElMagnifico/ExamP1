import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  Elementos = [];
  Items = [];
  info = InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Elementos = this.navParams.get('elementos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getItems(ev: any){
    console.log(ev.target.value)
    this.Items = this.Elementos.filter( elemento => {
      return elemento.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    })
  }

  verElemento(i){
    this.navCtrl.push(this.info ,{juego: i});
  }

}
