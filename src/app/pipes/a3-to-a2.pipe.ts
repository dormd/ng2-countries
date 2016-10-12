import { Inject, Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../models/countries.model';

@Pipe({
    name: 'a3ToA2'
})

export class A3ToA2Pipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    transform(value: string | string[], args: any[]): string[] {
        if (!value)
            return [];

        const a3Countries: string[] = typeof(value) === 'string' ? [ <string>value ] : <string[]>value; 

        return a3Countries.map((a3BorderCountry: string): string => {
            return _.keys(this._countriesData).find((a2Key: string): boolean => {
                return this._countriesData[a2Key].iso_3166_1_alpha3 === a3BorderCountry;
            });
        });
    } 
} 