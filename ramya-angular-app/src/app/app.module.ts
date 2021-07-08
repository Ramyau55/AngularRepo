import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { SelectionComponent } from './components/selection/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService } from './services/weatherdata.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
