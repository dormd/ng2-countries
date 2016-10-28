import { NgModule }                    from '@angular/core';
import { SharedModule }                from '../shared';
import { GalleryModule }               from '../gallery';
import { WorldFlagsMapComponent }      from './components';
import { MapCountryPositionService }   from './services';

const modules = [
    SharedModule,
    GalleryModule
];

const components = [
    WorldFlagsMapComponent,
];

const directives = [];

const pipes = [];

const providers = [
    MapCountryPositionService
];

const myExports = [
    WorldFlagsMapComponent,
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
export class WorldMapModule { }
