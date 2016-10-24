import { Component, Inject, ViewChild } from '@angular/core';

import { SpeakerService }    from './modules/speaker/services';

import { COUNTRIES_DATA, 
         Countries }         from './modules/shared/models';

import { ANTHEMS_DATA,
         Anthems }           from './models';

import { ShuffleDirective }  from './modules/shared/directives';
import { WikipediaService }  from './services';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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

    // search
    public _searchDataSource: Observable<any>;
    private _searchToken: string = '';

    constructor(private _wikipediaService: WikipediaService,
                private _speakerService: SpeakerService,
                @Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
                @Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    public ngOnInit() {
        this._countriesKeys = _.keys(this._countriesData);
        this._viewCountriesKeys = this._countriesKeys;    

        this._searchDataSource = Observable.create((observer: any) => {
            // Runs on every search
            observer.next(this._searchToken);
            
        }).mergeMap((token: string) => this._getCountriesAsObservable(token));
    }
 
    private _getCountriesAsObservable(token: string): Observable<any> {
        // g - global search; i - insensitive
        let query = new RegExp(token, 'ig');
    
        this._viewCountriesKeys = this._countriesKeys.filter((key: string): boolean => {

            const countryName = this._countriesData[key].name.common;
            return query.test(countryName);
        });

        return Observable.of(
            this._viewCountriesKeys.map((key: string) => {
                return { key: key, value: this._countriesData[key] };
            })
        );
    }

    private _onSearchValueChange(token: string) {
        if (!token || token.trim() === '') {
            this._viewCountriesKeys = this._countriesKeys;
            return;
        }
        
        this._getCountriesAsObservable(token);
    }

    private _onSearchCountrySelect(selectedCountry: any) {
        if (!selectedCountry || !selectedCountry.item || !selectedCountry.item.key)
            return;

        this._viewCountriesKeys = [ selectedCountry.item.key ];
    }

    private _onClearClick() {
        this._searchToken = '';
        this._viewCountriesKeys = this._countriesKeys;
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
