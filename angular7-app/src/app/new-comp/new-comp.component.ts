import { Component, OnInit } from "@angular/core";
import { MyserviceService } from '../myservice.service';

@Component({
  selector: "app-new-comp",
  templateUrl: "./new-comp.component.html",
  styleUrls: ["./new-comp.component.css"]
})
export class NewCompComponent implements OnInit {

  constructor(private myser: MyserviceService ) {
   }
  newCompVar = "Dhiyanesh enetered here...";
  numb = ["one", "two", "three"];
  isValid = true;
  myClickFunction(event) {
    //alert("you clicked a button");
    this.isValid = !this.isValid;
  }
  changeDropDown(event) {
    alert("drop down value has been changed");
    console.log(event);
  }

  todayDate = this.myser.showTodayDate() ;


  ngOnInit() {
  }
}
