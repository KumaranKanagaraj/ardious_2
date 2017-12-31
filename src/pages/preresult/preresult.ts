import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IChoosenAnswers, IChoosenAnswersEntity,IChoosenAnswer,ITarget } from '../../models/models';
import { ResultPage } from '../pages'

/**
 * Generated class for the PreresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preresult',
  templateUrl: 'preresult.html',
})
export class PreresultPage {

  optionsChoosed : IChoosenAnswers;
  targetQuestion: ITarget;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.optionsChoosed = navParams.get('choosenAnswer');
    this.targetQuestion = navParams.get('targetQuestion');
    var abc = this.targetQuestion.TargetQuestion
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreresultPage');
  }

  viewResultPage(){
    this.navCtrl
    .push(ResultPage, {
      targetQuestion: this.targetQuestion,
      calculatedAnswer:""
    })
    .then(() => {
      // first we find the index of the current view controller:
      const index = this.viewCtrl.index;
      // then we remove it from the navigation stack
      this.navCtrl.remove(index);
    });
  }

}
