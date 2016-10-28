import { Injectable,
         Inject }            from '@angular/core';

import { COUNTRIES_DATA, 
         Countries }         from '../../shared/models';

@Injectable()
export class MapCountryPositionService {

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

    public getCountryTop(alpha2: string, mapRelationFactor: number): number {
        const imageAlignment = 10;

        const latStr = this._countriesData[alpha2].geo.latitude_dec;
        const lat = +latStr;
        let top = 90 - lat;

        return top * mapRelationFactor - imageAlignment;
    }

    public getCountryLeft(alpha2: string, mapRelationFactor: number): number {
        const imageAlignment = 7;

        const lonStr = this._countriesData[alpha2].geo.longitude_dec;
        const lon = +lonStr;
        const left = 180 + lon;

        return left * mapRelationFactor - imageAlignment;
    }
}
