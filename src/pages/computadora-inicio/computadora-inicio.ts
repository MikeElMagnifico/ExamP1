import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ComputadoraInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadora-inicio',
  templateUrl: 'computadora-inicio.html',
})
export class ComputadoraInicioPage {
  info = InfoPage;
  Comp = [];
  search = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data =>{
      if(data.hasOwnProperty('list_ads')){
        this.Comp = data['list_ads'];
      }
    },
    error =>{console.log(JSON.stringify(error) )});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadoraInicioPage');
  }
Search(){
  this.navCtrl.push(this.search, {elementos : this.Comp});
}
VerComputadora(j){
  this.navCtrl.push(this.info, {juego: j});
}
}
