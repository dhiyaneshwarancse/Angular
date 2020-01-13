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
  constructor(private servApp:MyserviceService){}
  ngOnInit()
  {
this.todayDateApp = this.servApp.showTodayDate();
  }
}
