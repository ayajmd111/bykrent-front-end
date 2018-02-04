import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = {};
  filesToUpload={}




  constructor(private cmm:CommonService) { }

  registeruser(ayaj)
  {
 
    
    console.log(this.register);
   var url = "/api/userdetails";
   this.cmm.postbykData(url, this.register)
     .subscribe(data => {
     console.log(data);
     ayaj.reset();


     })


  }
  upload()
  {
     const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
       formData.append("uploads[]", files[0], files[0]['name']); 


      // this.http.post('http://localhost:5000/uploads', formData) 
       //.map(files => files.json()) .subscribe(files => console.log('files', files))
       
      }
       fileChangeEvent(fileInput: any) 
       {
          this.filesToUpload = <Array<File>>fileInput.target.files;
         }
  ngOnInit() {
  }

}
