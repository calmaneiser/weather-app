import { Component, OnInit } from "@angular/core";
import { WeatherApiService } from "./services/weather-api.service";

@Component({
  selector: "cio-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cities = [
    { id: "1701668", name: "Manila, Philippines" },
    { id: "1850147", name: "Tokyo, Japan" },
    { id: "1273294", name: "Delhi, India" },
    { id: "1796236", name: "Sanghai, China" },
    { id: "524901", name: "Moscow, Russia" }
  ];

  cityIDs: Array<any> = this.cities.map(city => {
    return city.id;
  });

  selectedCityId = this.cityIDs[0];
  selectedCity: any;
  weathers: Array<any> = [];
  weatherByCity: any;
  darkTheme: boolean = false;
  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit() {
    this.getWeatherByCityId(this.selectedCityId);
    console.log(this.cityIDs);
    console.log(this.ftoCelsius(60));
  }

  getWeathers() {
    this.weatherApi.getWeathersByCityIds(this.cityIDs).subscribe(weather => {
      this.weathers = weather["list"];
    });
  }

  getWeatherByCityId(cityId: string) {
    var test = {
      base: "stations",
      clouds: { all: 20 },
      cod: 200,
      coord: { lat: 14.6, lon: 120.98 },
      dt: 1571360123,
      id: 1701668,
      main: {
        humidity: 79,
        pressure: 1012,
        temp: 85.12,
        temp_max: 86,
        temp_min: 84.2
      },
      name: "Manila",
      sys: {
        country: "PH",
        id: 8160,
        message: 0.0063,
        sunrise: 1571348856,
        sunset: 1571391289,
        type: 1
      },
      timezone: 28800,
      visibility: 10000,
      weather: [
        {
          description: "few clouds",
          icon: "02d",
          id: 801
        }
      ],
      wind: {
        speed: 2.24
      }
    };
    this.weatherByCity = test;
    this.getSelectedCity(cityId);

    // this.weatherApi.getWeatherByCityId(cityId).subscribe(weather => {
    //   this.weatherByCity = weather;
    //   this.getSelectedCity(cityId);
    //   console.log(weather);
    // });
  }

  getSelectedCity(cityId) {
    return (this.selectedCity = this.cities.find(city => {
      return city.id === cityId;
    }));
  }

  ftoCelsius(farenheit: number) {
    return Math.round((farenheit - 32) * (5 / 9));
  }

  switchTheme() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) console.log("darkTheme");
    else console.log("default");
  }
}
