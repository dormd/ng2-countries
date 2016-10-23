import { Injectable,
         Inject }            from '@angular/core';

import { COUNTRIES_DATA, 
         LANGUAGES_DATA,
         Countries,
         Languages }         from '../../shared/models';

declare var responsiveVoice;

@Injectable()
export class SpeakerService {

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries,
                @Inject(LANGUAGES_DATA) private _languagesData: Languages) { }

    public speak(text: string, iso3Language = 'eng', gender = 'Female') {
        const languageGender = this._getLanguageAndGender(iso3Language, gender);
        
        if (languageGender)
            responsiveVoice.speak(text, languageGender)
    }

    public isSpeakerExist(iso3Language: string): boolean {
        const languageData = this._languagesData[iso3Language];
        return languageData && (!languageData.speak || languageData.speak.isExist !== false);
    }

    private _getLanguageAndGender(iso3Language: string, gender: string): string {
        const languageData = this._languagesData[iso3Language];
        if (!languageData)
            return null;

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
