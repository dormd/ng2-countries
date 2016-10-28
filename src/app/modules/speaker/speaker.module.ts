import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { SpeakerComponent,
         CountryNativeNameSpeakerComponent }   from './components';

import { SpeakerService,
         CountryNativeNameService }   from './services';

const components = [
    SpeakerComponent,
    CountryNativeNameSpeakerComponent
];

const myExports = [
    SpeakerComponent,
    CountryNativeNameSpeakerComponent
];

const providers = [
    SpeakerService,
    CountryNativeNameService
]

@NgModule({
    imports: [
        SharedModule
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
export class SpeakerModule { }
