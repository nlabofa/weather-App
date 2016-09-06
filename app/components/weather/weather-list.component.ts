import {Component, OnInit} from "@angular/core";
import {WeatherItem} from "./weather-item";
//import {WEATHER_ITEMS} from "./weather.data";
import {WeatherService} from "./weather.service";


@Component({
	moduleId: module.id,
    selector: 'weather-list',
    templateUrl: 'weather-list.component.html',
    styleUrls: ['css/weather-list.css'],
    providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
	//weatherItem: WeatherItem;
	//constructor() {
	//	this.weatherItem = new WeatherItem('London', 'RAINY', 4);
	//}
	weatherItems: WeatherItem[]

	constructor(private _weatherService: WeatherService) {}

	ngOnInit():any{
		//this.weatherItems = WEATHER_ITEMS;
		this.weatherItems = this._weatherService.getWeatherItems();
	}

}