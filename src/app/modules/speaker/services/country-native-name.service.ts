import { Injectable, Inject } from '@angular/core';
import * as _ from 'lodash';
import { COUNTRIES_DATA, Countries } from '../../shared/models';
import { SpeakerService } from './speaker.service';

export interface ICountryNativeName {
    name: string,
    language: string
}

@Injectable()
export class CountryNativeNameService {

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries,
                private _speakerService: SpeakerService) { }

    public getNativeData(alpha2: string): ICountryNativeName {
        const nativeNames = this._countriesData[alpha2].name.native;
        const a3Languages = _.keys(nativeNames);
        if (a3Languages.length === 0)
            return null;

        const a3Lang = a3Languages[0];

        return {
            name: nativeNames[a3Lang].common,
            language: a3Lang
        };
    }
}