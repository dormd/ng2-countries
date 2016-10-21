import { Component, Input, OnInit, ElementRef, Renderer }   from '@angular/core';
import { AnimationsService } from '../../modules/shared/services';

@Component({
    selector: 'app-country-outline',
    templateUrl: './country-outline.component.html',
    styleUrls: [ './country-outline.component.css' ],    
})

export class CountryOutlineComponent implements OnInit {
    @Input() alpha2: string;
    @Input() height = 30;
    @Input() width = 30;
    @Input() isAnimationAllowed = true;
 
    private _classes: Object;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,
                private _animationsService: AnimationsService) { }

    public ngOnInit() {

    }

    private _onOver(event) {
        if (this.isAnimationAllowed)
            this._animationsService.makeBigger(event.target, this._renderer);
    }
}
