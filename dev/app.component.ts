import { WeatherListComponent } from './weather/weather-list.component';
import {Component} from 'angular2/core';
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Meteo aplikacija</h1>
        </header>
        <weather-search></weather-search>
        <weather-list></weather-list>
    `,
    directives: [WeatherListComponent,WeatherSearchComponent]
})
export class AppComponent {
}