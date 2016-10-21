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

    private _countriesKeys: string[];
    private _anthems: Object = {};
    private _shuffleCount = 0;
    private _isShuffleOn = false;
    private _isSortMode = false;

    constructor(private _wikipediaService: WikipediaService,
                private _speakerService: SpeakerService,
                @Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
                @Inject(COUNTRIES_DATA) private _countriesData: Countries) {
                  
        this._countriesKeys = _.keys(this._countriesData);
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
}
