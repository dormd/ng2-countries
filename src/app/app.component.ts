import { Component, Inject, ViewChild } from '@angular/core';
import * as _ from 'lodash';

import { COUNTRIES_DATA, 
         Countries,
         ANTHEMS_DATA,
         Anthems }           from './modules/shared/models';

import { ShuffleDirective }  from './modules/shared/directives';

export enum ViewModeType {
    Cards, FlagsMap
}

export enum SortModeType {
    None, Area, Population
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(ShuffleDirective) _shuffleDirective: ShuffleDirective;

    private _countriesKeys: string[];
    private _viewCountriesKeys: string[];

    private _anthems: Object = {};
    
    // menu operations
    private _shuffleCount = 0;
    private _isShuffleOn = false;

    private _viewMode = ViewModeType.Cards;
    private _sortByMode = SortModeType.None;

    private _viewModeTypes = ViewModeType;
    private _sortModeTypes = SortModeType;

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries,
                @Inject(ANTHEMS_DATA) private _anthemsData: Anthems) {} 

    public ngOnInit() {
        this._countriesKeys = _.keys(this._countriesData);
        this._viewCountriesKeys = this._countriesKeys;    
    }

    private _onSearchChange(viewCountriesKeys: string[]) {
        this._viewCountriesKeys = viewCountriesKeys;
        this._sortByMode = SortModeType.None
    }

    private _onCardsModeClick() {
        this._viewMode = ViewModeType.Cards;
    }

    private _onMapModeClick() {
        this._viewMode = ViewModeType.FlagsMap;
    }

    private _onSortByArea() {
        // desc
        this._viewCountriesKeys = _.sortBy(this._viewCountriesKeys, (a2) => -1 * this._countriesData[a2].geo.area);
        this._sortByMode = SortModeType.Area;      
    }

    private _onSortByPopulation() {
        // desc
        this._sortByMode = SortModeType.Population;         

        this._viewCountriesKeys = _.sortBy(this._viewCountriesKeys, (a2) => {
            const populationData = this._countriesData[a2].population;
            if (!populationData)
                return 0;
            return -1 * this._countriesData[a2].population.count;
        });
    }

    private _onShuffleClick() {        
        this._shuffleDirective.toggle();
        this._isShuffleOn = !this._isShuffleOn;
        this._sortByMode = SortModeType.None;
    }

    private _onShuffleCount(count) {
        this._shuffleCount = count;
    }
}
