import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  bykList=[];
  form=0;
  details;
  constructor(private svc:CommonService,private rout:Router) { 

    this.details=JSON.parse(localStorage.getItem('loginuser'))
    console.log(this.details);
  
  }
  getbykData()
  {
    this.svc.postbykData("/api/bykdetails",null)
    .subscribe((results)=>{
      this.bykList = results;
      console.log(results)

    })

  }
  bookingData(j)
  {
   console.log(j);
   localStorage.setItem('bykDetails',JSON.stringify(j))
    }
  ownuser()
  {
this.form=1
}
  otheruser()
  {
this.form=2
  }
  reserverData()
  {
    this.rout.navigate(['/bookStatus']);
  }

  
  ngOnInit() {

    this.getbykData()
  }

}
