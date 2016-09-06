import {Component} from '@angular/core';
import {WeatherListComponent} from "./components/weather/weather-list.component";
import {WeatherSearchComponent} from "./components/weather/weather-search.component";
import {HTTP_PROVIDERS} from '@angular/http';
import {SidebarComponent} from './components/weather/sidebar.component'

@Component({
	moduleId: module.id,
    selector: 'my-app', 
    templateUrl: 'app.component.html',
    directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
}
