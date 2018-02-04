import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-bike-register',
  templateUrl: './bike-register.component.html',
  styleUrls: ['./bike-register.component.css']
})
export class BikeRegisterComponent implements OnInit {
register={};
showInsuranceExpiryDate:boolean;
  constructor(private cmn:CommonService) {
    this.showInsuranceExpiryDate=false;
   }
showIED(i){
  if(i=='y'){
this.showInsuranceExpiryDate=true;
}
else{
  this.showInsuranceExpiryDate=false;
}
}
bykRegister(){
  var url = "/api/bykregister";
    this.cmn.postbykData(url, this.register)
      .subscribe(data => {
      console.log(data);
      })

}
  ngOnInit() {
  }

}
