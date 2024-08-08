import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyInterFace } from '../models/my-inter-face';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }




  url = 'https://reqres.in/api/users/';



  getData():Observable<any>{

    return this.http.get<MyInterFace>(this.url);
    
  }

  getDataById(id:any):Observable<any>{

      return this.http.get(this.url + id);
  }



 

  



}
