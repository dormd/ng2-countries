import { Component, Input, OnInit, ElementRef, Renderer }   from '@angular/core';
import { AnimationsService } from '../../../shared/services';

@Component({
    selector: 'country-outline',
    templateUrl: './country-outline.component.html',
    styleUrls: [ './country-outline.component.css' ],    
})

export class CountryOutlineComponent implements OnInit {
    @Input() alpha2: string;
    @Input() height = 30;
    @Input() width = 30;
    @Input() isAnimationAllowed = true;
 
    private _classes: Object;
    private _imgSrc: string;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,
                private _animationsService: AnimationsService) { }

    public ngOnInit() {
        this._imgSrc = `assets/images/country-outlines/${ this.alpha2 }.png`;
    }

    private _onOver(event) {
        if (this.isAnimationAllowed)
            this._animationsService.makeBigger(event.target, this._renderer);
    }
}
