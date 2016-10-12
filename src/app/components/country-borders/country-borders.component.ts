import { Component, Input, Inject, OnInit, ElementRef, HostListener }   from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../../models';

import * as _ from 'lodash';
declare const $;

@Component({
    selector: 'app-country-borders',
    templateUrl: './country-borders.component.html',
    styleUrls: [ './country-borders.component.css' ],	
})

export class CountryBordersComponent implements OnInit {
    @Input() alpha2: string;

    private _a3CountryBorders: string[];
    private _flagHeight = 37;
    private _flagWidth = 50; 
    private _barWidth = 0;

    private _isShow = false;

    constructor(private _el: ElementRef,
                @Inject(COUNTRIES_DATA) private _countriesData: Countries) {}

    public ngOnInit(): void {
        this._a3CountryBorders = this._countriesData[this.alpha2].geo.borders || [];
        
        // this._el.nativeElement.style.width = `${this._flagWidth}px`;
        // this._el.nativeElement.style.width = `${this._a3CountryBorders.length * this._flagWidth * 1.4}px`;                             
    }

    // @HostListener('mouseenter', ['$event']) 
    // private onMouseEnter(event) {
    //     this._el.nativeElement.style.width = `${this._a3CountryBorders.length * this._flagWidth * 1.4}px`;           
    // }

    @HostListener('mouseout', ['$event']) 
    private _onMouseOut(event) {
        console.log(event);

        if (!this._isHostAncestorOf(event.toElement)) {
            this._isShow = false;
            // this._el.nativeElement.style.width = `${this._flagWidth}px`;
        }           
    }
    
    private _isHostAncestorOf(element) {
        if (!element.parentElement)
            return false;

        if (element.parentElement === this._el.nativeElement)
            return true;

        return this._isHostAncestorOf(element.parentElement);
    }

    private _onFlagClick(alpha2) {
        $(`#${ alpha2 }-summary`).goTo();
    }
}
