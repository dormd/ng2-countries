import { NgModule }          from '@angular/core';

import { SharedModule,
         SpeakerModule,
         GalleryModule,
         SearchModule,
         CountryCardModule,
         WorldMapModule }    from './modules';
 
import { AppComponent }      from './app.component';

const modules = [
    SharedModule,
    SpeakerModule,
    GalleryModule,
    SearchModule,
    CountryCardModule,
    WorldMapModule,
];

const components = [
    AppComponent
];

const directives = [];

const pipes = [];

const providers = [];

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
