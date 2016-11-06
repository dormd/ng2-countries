import { Component, Input, 
         Inject, OnInit,
         ElementRef, Renderer, 
         HostListener, ViewChild } from '@angular/core';

import { COUNTRIES_DATA, Countries, ICountry } from '../../../shared/models';
import { AnimationsService } from '../../../shared/services';

import * as _ from 'lodash';
declare const $;

@Component({
    selector: 'country-borders',
    templateUrl: './country-borders.component.html',
    styleUrls: [ './country-borders.component.css' ],	
})

export class CountryBordersComponent implements OnInit {
    @Input() alpha2: string;

    private _a3CountryBorders: string[];
    private _flagHeight = 37;
    private _flagWidth = 50; 

    private _isShow = false;
    private _isAnimationTime = false;

    private _barWidth: number;
    private _barHeight: number;

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer,                
                @Inject(COUNTRIES_DATA) private _countriesData: Countries,
                private _animationsService: AnimationsService) {}

    public ngOnInit(): void {
        this._a3CountryBorders = this._countriesData[this.alpha2].geo.borders || [];
        this._barWidth = 250;//this._elementRef.nativeElement.querySelector('.bar').offsetWidth;   
        this._barHeight = 98;//this._elementRef.nativeElement.querySelector('.bar').offsetHeight;
        // console.log(this._barHeight, this._barWidth);
        // this._elementRef.nativeElement.style.width = `${this._flagWidth}px`;
        // this._elementRef.nativeElement.style.width = `${this._a3CountryBorders.length * this._flagWidth * 1.4}px`;                             
    }

    // @HostListener('mouseenter', ['$event']) 
    // private onMouseEnter(event) {
    //     this._elementRef.nativeElement.style.width = `${this._a3CountryBorders.length * this._flagWidth * 1.4}px`;           
    // }

    @HostListener('mouseout', ['$event']) 
    private _onMouseOut(event) {
        if (!this._isAnimationTime) {

            if (!this._isHostAncestorOf(event.toElement)) {
                this._isAnimationTime = true;

                const barContainerEl = this._elementRef.nativeElement.querySelector('.bar');        
                this._animationsService.fadeOut(barContainerEl, this._renderer, () => {
                    this._isShow = false;
                    this._isAnimationTime = false;
                });
                // this._elementRef.nativeElement.style.width = `${this._flagWidth}px`;
            }           
        }
    }

    // @ViewChild('CountriesBar') _countriesBar: CountriesBar;
    private _show() {
        if (!this._isAnimationTime) {
            this._isAnimationTime = true;
            this._isShow = true;            

            const barContainerEl = this._elementRef.nativeElement.querySelector('.bar');
            // setTimeout(() => {
            const barWidth = 170;//barContainerEl.offsetWidth;
            const barHeight = 50;//barContainerEl.offsetHeight;
            
            // barContainerEl.style.width = '0px';
            // barContainerEl.offsetHeight = 0;
            
            this._animationsService.fadeIn(barContainerEl, this._renderer, () => {
                this._isAnimationTime = false;
            });

            /*$(barContainerEl).animate({
                width: `${ barWidth }px`,
                height: `${ barHeight }px`
            }, 1000);*/
            // }, 1000);
        }
    }
    
    private _isHostAncestorOf(element) {
        if (!element || !element.parentElement)
            return false;

        if (element.parentElement === this._elementRef.nativeElement)
            return true;

        return this._isHostAncestorOf(element.parentElement);
    }

    private _onFlagClick(alpha2) {
        $(`#${ alpha2 }-details`).goTo();
    }
}
