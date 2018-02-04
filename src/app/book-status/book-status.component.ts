import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.component.html',
  styleUrls: ['./book-status.component.css']
})
export class BookStatusComponent implements OnInit {
  byk=[];

  constructor() 
  {
    
    this.byk=JSON.parse(localStorage.getItem('bykDetails'))
    console.log(this.byk);

   }
   checkout()
   {
     alert("booked successfully");
   }

  ngOnInit() {
  }

}
