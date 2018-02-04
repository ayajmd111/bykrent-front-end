import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

  constructor(private http:Http) { }
  
  postbykData(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }

}
