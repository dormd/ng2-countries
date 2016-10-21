import { Component, Inject }              from '@angular/core';

import { COUNTRIES_DATA, 
         Countries }         from '../../modules/shared/models';

@Component({
    selector: 'world-flags-map',
    templateUrl: './world-flags-map.component.html',
    styleUrls: [ './world-flags-map.component.css' ],	
})

export class WorldFlagsMapComponent {
    private _countriesKeys: string[];
    private _mapRelationFactor = 2;

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

    public ngOnInit() {
        this._countriesKeys = _.keys(this._countriesData);
    }

    private _getCountryTop(alpha2: string) {
        const latStr = this._countriesData[alpha2].geo.latitude_dec;
        const lat = +latStr;
        let top = 90;

        top -= lat;

        return top * this._mapRelationFactor;
    }

    private _getCountryLeft(alpha2: string) {
        const lonStr = this._countriesData[alpha2].geo.longitude_dec;
        const lon = +lonStr;
        let left = 180;

        left += lon;
        return left * this._mapRelationFactor;        
    }
}
