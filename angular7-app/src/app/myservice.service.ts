import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate(){
    let todateDate = new Date();
    return todateDate;
  }
}
