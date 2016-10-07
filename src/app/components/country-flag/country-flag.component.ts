import { Component, Input, OnInit }   from '@angular/core';

@Component({
    selector: 'app-country-flag',
    templateUrl: './country-flag.component.html',
    // styleUrls: [ './country-flag.component.less' ],	
})

export class CountryFlagComponent implements OnInit {
    @Input() alpha2: string;
    @Input() isSquared: boolean = false;

    private _classes: Object;

    public constructor() { }

    public ngOnInit() {
        const countryIconClass = `flag-icon-${this.alpha2.toLowerCase()}`;

        this._classes = {
            'flag-icon': true,
            'flag-icon-squared': this.isSquared
        };

        this._classes[countryIconClass] = 'true';
    }
}
