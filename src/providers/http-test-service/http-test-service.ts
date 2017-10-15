import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpTestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpTestServiceProvider {

  constructor(private http: Http) {
    console.log('Hello HttpTestServiceProvider Provider');
  }

  getJsonData(){
  	return this.http.get('http://ip.jsontest.com/').map((res:Response)=>res.json());
  }

}
