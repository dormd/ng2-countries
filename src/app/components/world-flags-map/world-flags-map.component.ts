import { Component, Inject, Input }              from '@angular/core';

import { COUNTRIES_DATA, 
         Countries }         from '../../modules/shared/models';

@Component({
    selector: 'world-flags-map',
    templateUrl: './world-flags-map.component.html',
    styleUrls: [ './world-flags-map.component.css' ],	
})

export class WorldFlagsMapComponent {
    @Input() countriesKeys: string[];
    private _mapRelationFactor = 3;
    private _wholeWidth;
    private _wholeHeight;

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

    public ngOnInit() {
        this._updateResolution();
    }

    private _onBestResolution() {
        this._mapRelationFactor = 8;
        this._updateResolution();
    }

    private _onZoomIn() {
        this._mapRelationFactor++;
        this._updateResolution();        
    }

    private _onZoomOut() {
        this._mapRelationFactor--;
        this._updateResolution();        
    }

    private _updateResolution() {
        this._wholeWidth = 360 * this._mapRelationFactor;
        this._wholeHeight = 180 * this._mapRelationFactor;
    }

    private _getCountryTop(alpha2: string) {
        const imageAlignment = 10;

        const latStr = this._countriesData[alpha2].geo.latitude_dec;
        const lat = +latStr;
        let top = 90 - lat;

        return top * this._mapRelationFactor - imageAlignment;
    }

    private _getCountryLeft(alpha2: string) {
        const imageAlignment = 7;

        const lonStr = this._countriesData[alpha2].geo.longitude_dec;
        const lon = +lonStr;
        const left = 180 + lon;

        return left * this._mapRelationFactor - imageAlignment;
    }
}
