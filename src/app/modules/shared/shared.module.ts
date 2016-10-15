import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule,
         JsonpModule }      from '@angular/http';
         
import { MaterialModule }   from '@angular/material';

import { COUNTRIES_DATA,
         LANGUAGES_DATA }   from './models';

import { CountriesData,
         AnthemsData,
         LanguagesData }    from '../../../assets/data';

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
];

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },    
];


@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    declarations: [],
    providers: [
        ...providers
    ],
})
export class SharedModule { }
