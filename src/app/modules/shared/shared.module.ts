import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule,
         JsonpModule }      from '@angular/http';
         
import { MaterialModule }   from '@angular/material';

import { CountriesPipesModule,
         GeneralPipesModule }      from 'ng2-pipe';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ShuffleButtonComponent } from './components';
import { ShuffleDirective }       from './directives';

import { AnimationsService }      from './services';

import { CountriesData,
         AnthemsData,
         LanguagesData,
         COUNTRIES_DATA,
         LANGUAGES_DATA,
         ANTHEMS_DATA }           from './models';

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CountriesPipesModule,
    GeneralPipesModule,
    Ng2BootstrapModule,
    MaterialModule
];

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },  
    { provide: ANTHEMS_DATA, useValue: AnthemsData },
    AnimationsService,  
];

const components = [
    ShuffleButtonComponent
];

const directives = [
    ShuffleDirective
];

const pipes = []; 

const myExports = [
    ShuffleButtonComponent,
    ShuffleDirective,
    ...pipes,
    ...modules,
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...myExports
    ],
    declarations: [
        ...pipes,
        ...components,
        ...directives
    ],
    providers: [
        ...providers
    ],
})
export class SharedModule { }
