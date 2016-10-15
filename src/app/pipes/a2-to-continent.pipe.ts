import { Inject, Pipe, PipeTransform } from '@angular/core';

import * as _ from "lodash";

import { COUNTRIES_DATA, Countries, ICountry } from '../modules/shared/models/countries.model';

@Pipe({
    name: 'a2ToContinent'
})

export class A2ToContinentPipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    transform(value: any, args: any[]): any {
        const country: ICountry = this._countriesData[value];
        if (!country)
            return '';

        const continentObj = country.geo.continent;
        // for better safety (country over two continents)
        return _.values(continentObj).join(', ');
    } 
} 