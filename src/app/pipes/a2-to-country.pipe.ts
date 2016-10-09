import { Inject, Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { COUNTRIES_DATA, Countries, ICountry } from '../models/countries.model';

@Pipe({
    name: 'a2ToCountry'
})

export class A2ToCountryPipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    transform(value: any, args: any[]): any {
        const country: ICountry = this._countriesData[value];
        if (!country)
            return '';

        return country.name.common || '';
    } 
} 