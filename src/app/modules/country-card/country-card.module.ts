import { NgModule }                from '@angular/core';

import { SharedModule }            from '../shared';
import { SpeakerModule }           from '../speaker';
import { GalleryModule }           from '../gallery';
 
import { CountryDetailsComponent,
         CountryBordersComponent,
         CountriesBarComponent,
         AnthemComponent }         from './components';

import { WikipediaService }        from './services';

const modules = [
    SharedModule,
    SpeakerModule,
    GalleryModule
];

const components = [
    CountriesBarComponent,
    CountryBordersComponent,
    AnthemComponent,
    CountryDetailsComponent,
];

const directives = [];

const pipes = [];

const providers = [
    WikipediaService,
];

const myExports = [
    CountriesBarComponent,
    CountryBordersComponent,
    AnthemComponent,
    CountryDetailsComponent,
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [ 
        ...myExports
    ],
    declarations: [ 
        ...components 
    ],
    providers: [
        ...providers
    ],
})
export class CountryCardModule { }
