import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/';

import { SpeakerComponent,
         CountryNativeNameSpeakerComponent }   from './components';

import { SpeakerService,
         CountryNativeNameService }   from './services';

const components = [
    SpeakerComponent,
    CountryNativeNameSpeakerComponent
];

const exportsParts = [
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
        ...exportsParts
    ],
    declarations: [ 
        ...components 
    ],
    providers: [
        ...providers
    ],
})
export class SpeakerModule { }
