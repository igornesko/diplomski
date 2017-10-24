import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
@Injectable()
export class WeatherService {
    constructor(private _http:Http){

    }
    getWeatherItems() {
        return WEATHER_ITEMS;
    }
    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get(
            'http://api.openweathermap.org/data/2.5/weather?q='
    + cityName +'&APPID=58f2da73e236433cfe47a4b0f37d16a1&units=metric')
            .map(response=>response.json())
            .catch(error=>{console.log(error);
               return Observable.throw(error.json())
            });

    }

}