import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IChoosenAnswers, IChoosenAnswersEntity,IChoosenAnswer,ITarget } from '../../models/models';
import { HomePage } from '../pages'

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  optionsChoosed : IChoosenAnswers;
  targetQuestion: ITarget;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionsChoosed = navParams.get('calculatedAnswer');
    this.targetQuestion = navParams.get('targetQuestion');
    var abc = this.targetQuestion.TargetQuestion
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
