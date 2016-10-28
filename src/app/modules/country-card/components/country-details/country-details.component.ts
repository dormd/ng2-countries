import { Component, Inject, Input, OnInit } from '@angular/core';
import { ICountry } from '../../../shared/models';

@Component({
    selector: 'country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
    @Input() data: ICountry;
    @Input() serialNum = '';
    @Input() isShrinkMode = false;
    @Input() isSerialNumShow = false;
    @Input() isAnthemExist = false;

    private alpha2: string;
    private _gender = 'Female';

    constructor() {}

    public ngOnInit() {
        this.alpha2 = this.data.iso_3166_1_alpha2;
    }
}
