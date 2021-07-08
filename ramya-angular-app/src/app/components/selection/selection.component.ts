import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherdataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})

export class SelectionComponent  {

  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  
  weather: Weather = new Weather()
  city : any;
  dataJson: any = [];
  constructor(private weatherData: WeatherdataService) { }
  submit() {
    this.weatherData.load(this.city).subscribe(data => {
    console.log(data)
    this.dataJson = data;
    console.log(this.dataJson);
    this.weather.city = this.dataJson.name;
    this.weather.conditions = this.dataJson.weather[0].main;
    this.weather.temperature = Math.round((this.dataJson['main']['temp'] - 273.15)*1.8 + 32);
    this.weather.icon = this.weatherData.getIconUrl(this.dataJson['weather'][0]['icon'])
    this.onSelection.emit(this.weather)
    })
  }

}
