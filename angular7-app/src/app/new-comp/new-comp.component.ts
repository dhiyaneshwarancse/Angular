import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-comp",
  templateUrl: "./new-comp.component.html",
  styleUrls: ["./new-comp.component.css"]
})
export class NewCompComponent implements OnInit {
  constructor() {}
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

  ngOnInit() {}
}
