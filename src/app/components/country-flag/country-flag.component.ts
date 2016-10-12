import { Component, Input, OnInit, Output, EventEmitter }   from '@angular/core';

@Component({
    selector: 'app-country-flag',
    templateUrl: './country-flag.component.html',
    styleUrls: [ './country-flag.component.css' ],	
})

export class CountryFlagComponent implements OnInit {
    @Input() alpha2: string;
    @Input() height: number = 30;
    @Input() width: number = 30;

    @Output() flagClick = new EventEmitter();
 
    private _classes: { [key: string]: boolean };

    public constructor() { }

    public ngOnInit() {
        const countryIconClass = `flag-icon-${ this.alpha2.toLowerCase() }`;

        this._classes = {
            'flag-icon': true,
            [countryIconClass]: true
        };
    }

    private _onClick() {
        this.flagClick.emit(this.alpha2);
    }
}
