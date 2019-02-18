import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info = InfoPage;
  search = SearchPage;
  juegos = [];
  constructor(public navCtrl: NavController, public Http: HttpClient) {
    this.Http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data =>{
      //console.log(JSON.stringify(data))
      if(data.hasOwnProperty('list_ads')){
        this.juegos = data['list_ads'];
      }
    },
    error => {console.log(JSON.stringify(error) )});
    
  }
  Search(){
    this.navCtrl.push(this.search, {elementos : this.juegos});
  }
  VerJuego(j){
    this.navCtrl.push(this.info, {juego: j})
  }
}


