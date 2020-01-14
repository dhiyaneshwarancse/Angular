import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-app';
  todayDateApp;
  public personData=[];
  constructor(private servApp:MyserviceService){}
  ngOnInit()
  {
this.todayDateApp = this.servApp.showTodayDate();
this.servApp.getData().subscribe(
(data)=> {
  this.personData=Array.from(Object.keys(data),k=>data[k])
  
}

);

  }
}
