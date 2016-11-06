import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Renderer }   from '@angular/core';
import { AnimationsService } from '../../../shared/services';

@Component({
    selector: 'country-flag',
    templateUrl: './country-flag.component.html',
    styleUrls: [ './country-flag.component.css' ],	
})

export class CountryFlagComponent implements OnInit {
    @Input() alpha2: string;
    @Input() height = 30;
    @Input() width = 30;
    @Input() isAnimationAllowed = true;

    @Output() flagClick = new EventEmitter();
 
    private _classes: { [key: string]: boolean };
    private _alternativeImgSrc: string;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,
                private _animationsService: AnimationsService) { }

    public ngOnInit() {
        const countryIconClass = `flag-icon-${ this.alpha2.toLowerCase() }`;

        this._classes = {
            'flag-icon': true,
            [countryIconClass]: true,
            'flag': true
        };

        this._alternativeImgSrc = `assets/images/alternative-flags/${ this.alpha2 }-country-flag.png`;        
    }

    private _onOver(event) {
        if (this.isAnimationAllowed)
            this._animationsService.makeBigger(event.target, this._renderer);
    }

    private _onClick() {
        this.flagClick.emit(this.alpha2);
    }
}
