import { Component, Inject, ViewChild } from '@angular/core';

import { SpeakerService }    from './modules/speaker/services';

import { COUNTRIES_DATA, 
         Countries }         from './modules/shared/models';

import { ANTHEMS_DATA,
         Anthems }           from './models';

import { ShuffleDirective }  from './modules/shared/directives';
import { WikipediaService }  from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(ShuffleDirective) _shuffleDirective: ShuffleDirective;
    private _sourcedCountriesKeys: string[];
    private _countriesKeys: string[];
    private _anthems: Object = {};
    private _gender;
    private _shuffleCount = 0;
    private _isShuffleOn = false;
    private _isSortMode = false;

    constructor(private _wikipediaService: WikipediaService,
                private _speakerService: SpeakerService,
                @Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
                @Inject(COUNTRIES_DATA) private _countriesData: Countries) {
                  
        this._sourcedCountriesKeys = _.keys(this._countriesData);
        this._countriesKeys = _.clone(this._sourcedCountriesKeys);
        this._gender = 'Female';

        // for fetching all wikimedia anthems by common country name
        // this._countriesKeys.forEach((a2) => {
        //     const countryName = _countriesData[a2].name.wiki || _countriesData[a2].name.common;
        //     this._getAnthemWikiLink(countryName).subscribe((filePath: string) => {
        //       this._anthems[a2] = `https://commons.wikimedia.org/wiki/File%3A${ filePath }?embedplayer=yes`;
        //       console.log(this._anthems);
        //     });
        // });
    }

    private _onSortByArea() {
        // desc
        this._countriesKeys = _.sortBy(this._countriesKeys, (a2) => -1 * this._countriesData[a2].geo.area);
        this._isSortMode = true;        
    }

    private _onSortByPopulation() {
        // desc
        this._countriesKeys = _.sortBy(this._countriesKeys, (a2) => {
            const populationData = this._countriesData[a2].population;
            if (!populationData)
                return 0;
            return -1 * this._countriesData[a2].population.count;
        });
        this._isSortMode = true;        
    }

    private _onShuffleClick() {        
        this._shuffleDirective.toggle();
        this._isShuffleOn = !this._isShuffleOn;
        this._isSortMode = false;
    }

    private _onShuffleCount(count) {
        this._shuffleCount = count;
    }

    // private _getAnthemWikiLink(commonCountryName: string) {
    //     return this._wikipediaService.fetchAnthemByCountry(commonCountryName);
    // }
}
