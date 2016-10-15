import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule,
         SpeakerModule }    from './modules';

import { AppComponent } from './app.component';
import { CountryFlagComponent,
         CountryOutlineComponent,
         CountryBordersComponent,
         CountriesBarComponent,
         AnthemComponent }  from './components';

import { ShuffleDirective } from './directives'

import { A2ToCountryPipe,
         A2ToCapitalPipe,
         A2ToContinentPipe,
         A2ToAnthemPipe,
         A3ToA2Pipe,
         SafePipe, }        from './pipes';

import { WikipediaService } from './services';
import { ANTHEMS_DATA }     from './models';
import { AnthemsData }      from '../assets/data';

const modules = [
    SharedModule,
    SpeakerModule,
    MaterialModule.forRoot()
];

const components = [
    AppComponent,
    CountryFlagComponent,
    CountryOutlineComponent,
    CountryBordersComponent,
    CountriesBarComponent,
    AnthemComponent
];

const directives = [
    ShuffleDirective
];

const pipes = [
    A2ToCapitalPipe,
    A2ToContinentPipe,
    A2ToCountryPipe,
    A2ToAnthemPipe,
    A3ToA2Pipe,
    SafePipe
];

const providers = [
    { provide: ANTHEMS_DATA, useValue: AnthemsData },
    WikipediaService
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
