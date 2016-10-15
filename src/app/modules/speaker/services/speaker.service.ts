import { Injectable,
         Inject }            from '@angular/core';

import { COUNTRIES_DATA, 
         LANGUAGES_DATA,
         Countries,
         Languages }         from '../../shared/models';

import * as _ from 'lodash';
declare var responsiveVoice;

@Injectable()
export class SpeakerService {

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries,
                @Inject(LANGUAGES_DATA) private _languagesData: Languages) { }

    public speak(text: string, iso3Language = 'eng', gender = 'Female') {
        const languageGender = this._getLanguageAndGender(iso3Language, gender);
        console.log(languageGender); 
        
        if (languageGender)
            responsiveVoice.speak(text, languageGender)
    }

    private _getLanguageAndGender(sourceLanguage: string, gender: string): string {
        let languageData = this._languagesData[sourceLanguage];
        let actualGender = gender;
        const languageSpeakData = languageData.speak;

        if (languageSpeakData) {
            if (languageSpeakData.isExist === false)
                return null;

            if (languageSpeakData.optional) {
                return this._getLanguageAndGender(languageSpeakData.optional, actualGender)
            }

            if (languageSpeakData.speakerGenderRestriction)
                actualGender = languageSpeakData.speakerGenderRestriction;
        }

        return `${languageData.full} ${actualGender}`;
    }
}
