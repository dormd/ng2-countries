import { NgModule }                  from '@angular/core';
import { SharedModule }              from '../shared';
import { GalleryModule }             from '../gallery'; 
import { CountriesSearchComponent }  from './components';

const modules = [
    SharedModule,
    GalleryModule
];

const components = [
    CountriesSearchComponent,
];

const directives = [];

const pipes = [];

const providers = [];

const myExports = [
    CountriesSearchComponent
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
export class SearchModule { }
