import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the KayamaiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KayamaiProvider {

  // private corsUrl = 'https://cors-anywhere.herokuapp.com'
  // private getQuestionsURL = 'http://kayamai.thinkbyfun.com/api/example/user'

  constructor(public http: Http) {
    console.log('Hello KayamaiProvider Provider');   //TODO: Remove Console
  }

  private constructHeaders() : RequestOptions{
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic YWRtaW46MTIzNA==');
    headers.append('X-API-KEY', 'CODEX@123');
    return new RequestOptions({ headers: headers });
  }


}
