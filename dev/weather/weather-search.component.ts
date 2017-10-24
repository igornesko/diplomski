import {Component} from "angular2/core";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";
import { ControlGroup } from '@angular2/common';
@Component({
    selector:'weather-search',
    template:`
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">Grad</label>
                <input ngControl="location" type="text" id="city" required>
                <button type="submit">Učitaj</button>
            </form>
            <hr>
        </section>
    `,

})
export class WeatherSearchComponent {
    constructor (private _weatherService:WeatherService){}
    onSubmit(form: ControlGroup){
        this._weatherService.searchWeatherData(form.value.location).subscribe(
            data=>{
                const weatherItem =new WeatherItem(data.name, data.weather[0].description,data.main.temp);
                this._weatherService.addWeatherItem(weatherItem);

            }
        );

    }
}