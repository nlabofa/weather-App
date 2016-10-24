import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';
import {WeatherService} from "./components/weather/weather.service";

import {WeatherListComponent} from "./components/weather/weather-list.component";
import {WeatherSearchComponent} from "./components/weather/weather-search.component";
import {SidebarComponent} from './components/weather/sidebar.component'



@NgModule({
  imports: [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent,WeatherListComponent,WeatherSearchComponent,SidebarComponent ],
  providers: [WeatherService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
