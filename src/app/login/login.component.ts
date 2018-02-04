import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login={};
loginuser={};
temp:boolean;

  constructor(private cmn:CommonService,private route:Router) { 
    this.temp=true;
  }

  ngOnInit() {
  }
  signIn(){
    this.temp=false;
    }
  signUp(){
    this.temp=true;
  }
  signupuser()
{  
  //console.log(j);

    console.log(this.loginuser);
     var url = "/api/logindetails";
  this.cmn.postbykData(url, this.loginuser)
    .subscribe(data => {
   // console.log(data);
   localStorage.setItem('loginuser',JSON.stringify(data))

    if(data==400){
      console.log("user doesn't exist");

    }
    else{
      this.route.navigate(['/products'])
    }
    })
    

//console.log(this.loginuser);
  }

}
