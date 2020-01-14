import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
private apUrl="http://jsonplaceholder.typicode.com/users";
  constructor(private ht:HttpClient) { 

  }
  getData(){
    return this.ht.get(this.apUrl);
  }
  showTodayDate(){
    let todateDate = new Date();
    return todateDate;
  }
}
