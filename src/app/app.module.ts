import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NavigationComponent } from "app/navigation/navigation.component";
import { MapComponent } from "app/map/map.component";
import { ShowOnScrollDirective } from "app/shared/show-on-scroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    ShowOnScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
