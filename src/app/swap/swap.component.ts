import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

  constructor() { }
  array=["Mahesh","Surya","Tulasi","Shiva","Mani"];
  array1=[];

    filterItems(query) {
   return this.array.filter(function(el) {
       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
   })
 }
 search(){
   let b =(<HTMLInputElement>document.getElementById("search1")).value;
   this.array=this.filterItems(b);
 }
 swap(i){

  var arr= this.array.indexOf(i);
    this.array.splice(arr,1);
    var j = this.array1.length;
    this.array1.splice(j,0,i);
  }
  swap1(i){
    
    var arr= this.array1.indexOf(i);
      this.array1.splice(arr,1);
      var j = this.array.length;
      this.array.splice(j,0,i);
    }
  

  ngOnInit() {
  }

}
