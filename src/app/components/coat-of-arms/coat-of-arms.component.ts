import { Component, Input, OnInit, ElementRef, Renderer }   from '@angular/core';
import { AnimationsService } from '../../modules/shared/services';

@Component({
    selector: 'coat-of-arms',
    templateUrl: './coat-of-arms.component.html',
    styleUrls: [ './coat-of-arms.component.css' ],    
})

export class CoatOfArmsComponent {
    @Input() alpha2: string;
    @Input() height = 30;
    @Input() width = 30;
    @Input() isAnimationAllowed = true;
 
    private _srcPrefix: string;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,
                private _animationsService: AnimationsService) { }

    private _onOver(event) {
        if (this.isAnimationAllowed)
            this._animationsService.makeBigger(event.target, this._renderer);
    }
}
