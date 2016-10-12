import { Inject, Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../models/countries.model';

@Pipe({
    name: 'a2ToCapital'
})

export class A2ToCapitalPipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    transform(value: any, args: any[]): any {
        const country: ICountry = this._countriesData[value];
        if (!country)
            return '';

        return country.capital || '';
    } 
} 