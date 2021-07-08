import { Component } from '@angular/core';

export class Weather { 
  city: any;
  conditions: any; 
  temperature: any; 
  icon: any; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ramya-angular-app';
  constructor(){

  }
}
