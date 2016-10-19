import { Inject, Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../modules/shared/models/countries.model';

@Pipe({
    name: 'a2ToPopulation'
})

export class A2ToPopulationPipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    public transform(a2: string | string, args: any[]): number {
        const country: ICountry = this._countriesData[a2];
        if (!country || !country.geo || !country.geo.area)
            return null;

        return country.population.count;
    } 
} 