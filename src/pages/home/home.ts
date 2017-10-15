import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Vibration } from '@ionic-native/vibration';
import { HttpTestServiceProvider } from '../../providers/http-test-service/http-test-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	show=false;
	toggleImageStr="Show";
	toggleVibrationStr="Start";
  jsonData;

  constructor(public navCtrl: NavController,private nativeStorage: NativeStorage,private vibration: Vibration, 
  	private httpTestService:HttpTestServiceProvider) {

	  // this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
	  // .then(
	  //   () => console.log('Stored item!'),
	  //   error => console.error('Error storing item', error)
	  // );

	  // this.nativeStorage.getItem('myitem')
	  // .then(
	  //   data =>{this.a=data.property},
	  //   error => console.error(error)
	  // );
  }

  toggleImage(){
  	this.show= !this.show ? true:false;
  	this.toggleImageStr= (this.toggleImageStr==="Show")? "Hide" :"Show";
  }

  toggleVibration(){
  	this.toggleVibrationStr= (this.toggleVibrationStr==="Start")? "Stop" :"Start";

  	if(this.toggleVibrationStr==="Stop"){
  		this.vibration.vibrate([2000,1000,4000]);	
  	}
  	else{
  		this.vibration.vibrate(0);
  	}
  }

  getJson(){
  	this.httpTestService.getJsonData().
  	subscribe(
      data=>{
        this.jsonData=JSON.stringify(data);
      }
      ,err=>console.log(err),()=>console.log('finished'));
  }
}
