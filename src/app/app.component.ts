import { Component, Inject } from '@angular/core';

import { COUNTRIES_DATA, 
         ANTHEMS_DATA,
         Countries,
         Anthems }           from './models';

import { WikipediaService }  from './services';

// import * as wikipedia from 'wikipedia-js/lib/wikiClient.js';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _countriesKeys: string[];
  private _anthems: Object = {};

  constructor(private _wikipediaService: WikipediaService,
              @Inject(COUNTRIES_DATA) private _countriesData: Countries,
              @Inject(ANTHEMS_DATA) private _anthemsData: Anthems) {
    this._countriesKeys = _.keys(this._countriesData);

    // for fetching all wikimedia anthems by common country name
    // this._countriesKeys.forEach((a2) => {
    //     const countryName = _countriesData[a2].name.wiki || _countriesData[a2].name.common;
    //     this._getAnthemWikiLink(countryName).subscribe((filePath: string) => {
    //       this._anthems[a2] = `https://commons.wikimedia.org/wiki/File%3A${ filePath }?embedplayer=yes`;
    //       console.log(this._anthems);
    //     });
    // });
  }

  // private _getAnthemWikiLink(commonCountryName: string) {
  //     return this._wikipediaService.fetchAnthemByCountry(commonCountryName);
  // }
}
