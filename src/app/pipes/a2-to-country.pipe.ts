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

        if (!args || args.length === 0 || args[0] === 'common')
            return country.name.common || '';

        const nameType = args[0];
        if (nameType === 'official')
            return country.name.official;
        
        if (args.length === 1) {
            if (nameType === 'native') {
                // first native language common country name
                const values = _.values(country.name.native);
                if (values.length > 0)
                    return values[0].common;
            }
            return '';            
        }

        const nativeNameKey = args[1];
        const nativeNameObj = country.name.native[nativeNameKey];
        if (!nativeNameObj)
            return '';

        if (args.length === 2)
            return nativeNameObj.common;

        const nativeNameKeyType = args[2];
        return nativeNameObj[nativeNameKeyType] || '';
    } 
} 