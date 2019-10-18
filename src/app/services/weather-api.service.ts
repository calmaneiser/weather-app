import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherApiService {
  api_key: string = "290d96aead2b14867daf36bbf2cea46d";
  api_link_by_id: string = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${this.api_key}&id=`;
  api_link_all: string = `http://api.openweathermap.org/data/2.5/group?&units=imperial&appid=${this.api_key}&id=`;

  constructor(private http: HttpClient) {}

  getWeatherByCityId(cityID) {
    return this.http.get(this.api_link_by_id + cityID);
  }

  getWeathersByCityIds(cityIDs: Array<any>) {
    return this.http.get(this.api_link_all + cityIDs);
  }
}
