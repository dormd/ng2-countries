import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { CountryFlagComponent,
         CountryOutlineComponent } from './components';

import { A2ToCountryPipe,
         A2ToCapitalPipe,
         A2ToContinentPipe, }      from './pipes';

import { COUNTRIES_DATA } from './models/countries.model'

import { CountriesData } from '../assets/data/countries';

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
];

const components = [
    AppComponent,
    CountryFlagComponent,
    CountryOutlineComponent,
];

const pipes = [
  A2ToCapitalPipe,
  A2ToContinentPipe,
  A2ToCountryPipe
];

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  providers: [
    { provide: COUNTRIES_DATA, useValue: CountriesData }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
