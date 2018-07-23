import { Component } from '@angular/core';
//our root app component
import {HostBinding, HostListener, Directive} from '@angular/core'

@Directive({
  selector: '[autoGrow]',
})
export class AutoGrowDirective {
  @HostBinding('style.width.px')
  width:number = 120;

  
  @HostListener('focus')
  onFocus() {
    this.width=500;
  }

  @HostListener('blur')
  onBlur(){
    this.width = 120;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app!!';
}
