import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search';

/**
 * Generated class for the MantenimientoInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantenimiento-inicio',
  templateUrl: 'mantenimiento-inicio.html',
})
export class MantenimientoInicioPage {
  mantenimientos = [];
  info = InfoPage;
  search = SearchPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=8020&offset=1&lim=29&lang=es')
    .subscribe(data => 
      {if(data.hasOwnProperty('list_ads')){
        this.mantenimientos = data['list_ads']

      }
    },
    error => {console.log(JSON.stringify(error) )});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantenimientoInicioPage');
  }
  Search(){
    this.navCtrl.push(this.search, {elementos : this.mantenimientos});
  }
  VerMantenimiento(j){
    this.navCtrl.push(this.info, {juego: j})
  }
}
