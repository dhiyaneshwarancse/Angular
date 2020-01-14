import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewCompComponent } from "./new-comp/new-comp.component";
import { ChangeTextDirective } from './change-text.directive';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [AppComponent, NewCompComponent, ChangeTextDirective],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
