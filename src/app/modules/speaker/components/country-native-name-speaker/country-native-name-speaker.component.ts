import { Component, Input, OnInit } from '@angular/core';
import { SpeakerService,
         CountryNativeNameService } from '../../services';

@Component({
    selector: 'country-native-name-speaker',
    templateUrl: './country-native-name-speaker.component.html'
})

export class CountryNativeNameSpeakerComponent implements OnInit {
    @Input() alpha2: string;
    @Input() gender = 'Female';

    private _name: string = '';
    private _language: string = '';

    constructor(private _speakerService: SpeakerService,
                private _countryNativeNameService: CountryNativeNameService) {}

    public ngOnInit() {
        const nativeNameData = this._countryNativeNameService.getNativeData(this.alpha2);
        this._name = nativeNameData.name;
        this._language = nativeNameData.language;
    }
}
