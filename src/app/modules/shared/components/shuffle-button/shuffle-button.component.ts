import { Component, Input, Output, ViewChild, EventEmitter, ElementRef, Renderer } from '@angular/core';

import { AnimationsService }  from '../../services';

@Component({
    selector: 'shuffle-button',
    templateUrl: './shuffle-button.component.html',
    styleUrls: ['./shuffle-button.component.css']
})
export class ShuffleButtonComponent {
    @Input() count = 0;
    @Output() shuffleClick = new EventEmitter();
    @ViewChild('icon') _iconEl: ElementRef;    

    private _isShuffleOn = false;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,
                private _animationsService: AnimationsService) {}


    private _onClick() {
        this.shuffleClick.emit();
        this._isShuffleOn = !this._isShuffleOn;

        if (this._isShuffleOn)
            this.count = 0;
    }

    private _onMouseEnter() {
        this._animationsService.rotate(this._iconEl.nativeElement, this._renderer);        
    }
}
