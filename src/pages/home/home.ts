import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KayamaiProvider } from '../../providers/providers';
import { ISlickQuestions,SlickQuestions} from '../../models/models';
import { DetailPage } from '../pages'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allQuestions:ISlickQuestions;
  questions:any[];
  constructor(public kayamai: KayamaiProvider,public navCtrl: NavController) {
      this.kayamai.getQuestions().then(data => {
        console.log(data);
        var parseData = {};
        parseData["Questions"] = data;
        this.allQuestions  = SlickQuestions.Parse(JSON.stringify(parseData));
        this.questions = this.allQuestions.Questions;
      })
      .catch(error => { console.log(error) });
     }

     goTo(item) {
      console.log(item);
      this.navCtrl.push(DetailPage, {
        data: item
      });
    }     

}
  
