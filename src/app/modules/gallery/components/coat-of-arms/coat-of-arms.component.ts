import { Component, Input, OnInit, Renderer }   from '@angular/core';
import { AnimationsService } from '../../../shared/services';

@Component({
    selector: 'coat-of-arms',
    templateUrl: './coat-of-arms.component.html',
    styleUrls: [ './coat-of-arms.component.css' ],    
})

export class CoatOfArmsComponent implements OnInit {
    @Input() alpha2: string;
    @Input() height = 30;
    @Input() width = 30;
    @Input() isAnimationAllowed = true;
 
    private _srcPrefix: string;
    private _imgSrc: string;

    constructor(private _renderer: Renderer,
                private _animationsService: AnimationsService) {}

    public ngOnInit() {
        this._imgSrc = `assets/images/coat-of-arms/${ this.alpha2 }.png`;        
    }

    private _onOver(event) {
        if (this.isAnimationAllowed)
            this._animationsService.makeBigger(event.target, this._renderer);
    }
}
