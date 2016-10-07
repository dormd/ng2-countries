import { Component, Input, OnInit }   from '@angular/core';

@Component({
    selector: 'app-country-outline',
    templateUrl: './country-outline.component.html',
    // styleUrls: [ './country-outline.component.less' ],
})

export class CountryOutlineComponent implements OnInit {
    @Input() alpha2: string;

    private _classes: Object;

    public constructor() { }

    public ngOnInit() {
        const countryIconClass = `flag-icon-${this.alpha2.toLowerCase()}`;

        this._classes = {
            'outline-icon': true,
        };

        this._classes[countryIconClass] = 'true';
    }
}
