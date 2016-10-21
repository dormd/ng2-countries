import { Inject, Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../modules/shared/models/countries.model';

@Pipe({
    name: 'a2ToWikiLink'
})

export class A2ToWikiLinkPipe implements PipeTransform {
    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    transform(value: any, args: any[]): any {
        const country: ICountry = this._countriesData[value];
        if (!country)
            return '';

        return `https://wikipedia.org${ country.wikiLink }`;
    } 
} 