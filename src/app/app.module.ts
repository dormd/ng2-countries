import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,
         JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { CountryFlagComponent,
         CountryOutlineComponent,
         AnthemComponent }  from './components';

import { A2ToCountryPipe,
         A2ToCapitalPipe,
         A2ToContinentPipe,
         A2ToAnthemPipe,
         SafePipe, }        from './pipes';

import { WikipediaService } from './services';

import { COUNTRIES_DATA,
         ANTHEMS_DATA }     from './models';

import { CountriesData,
         AnthemsData }      from '../assets/data';

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot()
];

const components = [
    AppComponent,
    CountryFlagComponent,
    CountryOutlineComponent,
    AnthemComponent
];

const pipes = [
    A2ToCapitalPipe,
    A2ToContinentPipe,
    A2ToCountryPipe,
    A2ToAnthemPipe,
    SafePipe
];

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: ANTHEMS_DATA, useValue: AnthemsData },
    WikipediaService
]

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
