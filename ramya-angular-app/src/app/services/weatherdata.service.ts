import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = '60de82b08bbf6e007f5ece65c25cb7b4'  

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
