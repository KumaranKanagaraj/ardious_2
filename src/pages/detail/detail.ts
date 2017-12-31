import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,ViewController  } from 'ionic-angular';
import { ISlickQuiz,SlickQuiz,ILinkQuestionsEntity,ILinkAnswerEntity, ITarget} from '../../models/models';
import { IChoosenAnswers, IChoosenAnswersEntity,IChoosenAnswer } from '../../models/models';
import { KayamaiProvider } from '../../providers/providers';
import { PreresultPage } from '../pages'
import * as $ from 'jquery'


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  @ViewChild(Slides) slides: Slides;

  slickQuiz: ISlickQuiz;
  linkQuestions: ILinkQuestionsEntity[];
  targetQuestion: ITarget;
  optionsChoosed : IChoosenAnswers;

  itemsSelected : boolean;
  
  constructor(public kayamai: KayamaiProvider,public navCtrl: NavController,public viewCtrl: ViewController,
    public navParams: NavParams ) { 
    console.log("AboutPage: "+ navParams.get('data')); 
    
    this.populateLinkQuestion();
  }

  populateLinkQuestion(){
    this.kayamai.getJsonFile().then(data => {
      this.slickQuiz  = SlickQuiz.Parse(JSON.stringify(data));
      this.targetQuestion = this.slickQuiz.Target;
      this.linkQuestions = this.slickQuiz.LinkQuestions;
      this.populateOptionsChoosed(this.linkQuestions)
    })
    .catch(error => { console.log(error) });
  }

  populateOptionsChoosed(optionsQA:ILinkQuestionsEntity[]){
    var optionsEntity : IChoosenAnswersEntity[] = [];
    var element : IChoosenAnswersEntity;
    for (var index = 0; index < optionsQA.length; index++) {
        element = <IChoosenAnswersEntity> {  
        Question: optionsQA[index].LinkQuestion,
        ChoosenAnswer: optionsQA[index].LinkAnswer[0],
        IsAnswered: false
    }
     optionsEntity.push(element);
    }
    var parseData = {};
    parseData["ChoosenAnswers"] = optionsEntity;
    this.optionsChoosed = parseData;
  }

  goToSlide(slideNumber) {
		this.slides.slideTo(slideNumber, 500);
	}

  next(slide, index) {
    slide.slider.slideTo(index, 2000)
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidedemoPage');
  }

  updateSlide(e:any,info:ILinkAnswerEntity) {
    this.optionsChoosed.ChoosenAnswers[this.slides.getActiveIndex()].ChoosenAnswer = info;
    //this.optionsChoosed.ChoosenAnswers[this.slides.getActiveIndex()].IsAnswered = e.checked;
    if(this.slides.isEnd()){
      this.reachedEnd();
    }
    else{
      this.goToSlide(this.slides.getActiveIndex()+1); 
    }
  }

  reachedEnd(){
      // for (var index = 0; index < this.optionsChoosed.ChoosenAnswers.length; index++) {
      //    if(!this.optionsChoosed.ChoosenAnswers[index].IsAnswered)
      //       return "Answer all questions"        
      // }
      this.navCtrl
      .push(PreresultPage, {
        choosenAnswer: this.optionsChoosed,
        targetQuestion: this.targetQuestion
      })
      .then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
      });
      // this.navCtrl.push(ListPage);
      //this.navCtrl.setRoot(ListPage);
  }

}
