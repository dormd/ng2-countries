import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule,
         JsonpModule }      from '@angular/http';
         
import { MaterialModule }   from '@angular/material';

import { ShuffleButtonComponent } from './components';
import { ShuffleDirective }       from './directives';

import { AnimationsService }      from './services';

import { COUNTRIES_DATA,
         LANGUAGES_DATA }   from './models';

import { CountriesData,
         AnthemsData,
         LanguagesData }    from '../../../assets/data';

const myExports = [
    ShuffleButtonComponent,
    ShuffleDirective
];

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
];

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },  
    AnimationsService,  
];

const components = [
    ShuffleButtonComponent
];

const directives = [
    ShuffleDirective
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        ...myExports
    ],
    declarations: [
        ...components,
        ...directives
    ],
    providers: [
        ...providers
    ],
})
export class SharedModule { }
