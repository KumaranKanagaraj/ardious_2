import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KayamaiProvider } from '../../providers/providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public kayamai: KayamaiProvider,public navCtrl: NavController) {
     
  }

}
