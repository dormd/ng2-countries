import { NgModule }                  from '@angular/core';

import { SharedModule }              from '../shared';
 
import { CountryFlagComponent,
         CountryOutlineComponent,
         CoatOfArmsComponent,
         CountryGalleryComponent }   from './components';

const modules = [
    SharedModule,
];

const components = [
    CountryFlagComponent,
    CountryOutlineComponent,
    CoatOfArmsComponent,
    CountryGalleryComponent,
];

const directives = [];

const pipes = [];

const providers = [];

const myExports = [
    CountryFlagComponent,
    CountryOutlineComponent,
    CoatOfArmsComponent,
    CountryGalleryComponent,
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
export class GalleryModule { }
