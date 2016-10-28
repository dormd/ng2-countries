import { NgModule }          from '@angular/core';
import { MaterialModule }    from '@angular/material';

import { SharedModule,
         SpeakerModule }     from './modules';
 
import { AppComponent }      from './app.component';
import { CountryDetailsComponent,
         CountryFlagComponent,
         CountryOutlineComponent,
         CountryBordersComponent,
         CountriesBarComponent,
         CountryGalleryComponent,
         CoatOfArmsComponent,
         WorldFlagsMapComponent,
         CountriesSearchComponent,
         AnthemComponent }   from './components';

import { WikipediaService }  from './services';

const modules = [
    SharedModule,
    SpeakerModule,
    MaterialModule.forRoot()
];

const components = [
    CountryDetailsComponent,
    CountryFlagComponent,
    CountryOutlineComponent,
    CountryBordersComponent,
    CountriesBarComponent,
    CountryGalleryComponent,
    CoatOfArmsComponent,
    WorldFlagsMapComponent,
    CountriesSearchComponent,
    AnthemComponent,
    AppComponent
];

const directives = [];

const pipes = [];

const providers = [
    WikipediaService,
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
