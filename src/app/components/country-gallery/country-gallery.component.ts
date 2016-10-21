import { Component, Input, 
         Output, EventEmitter }              from '@angular/core';

@Component({
    selector: 'country-gallery',
    templateUrl: './country-gallery.component.html',
    styleUrls: [ './country-gallery.component.css' ],	
})

export class CountryGalleryComponent {
    @Input() alpha2: string[];
    @Input() isOutlinesHide = false;
    @Input() isCoatOfArmsHide = false;
 
    private _selectedImage = 0;

    private _littleHeight = 25;
    private _littleWidth = 25;

    private _bigHeight = 63;
    private _bigWidth = 85; 

    private _bigOutlineHeight = 63;
    private _bigOutlineWidth = 85; 

    public constructor() { }

    private _onMouseEnterCoatOfArms() {
        this._selectedImage = 1;
    }

    private _onMouseEnterOutline() {
        this._selectedImage = 2;
    }

    private _onMouseEnterFlag() {
        this._selectedImage = 0;
    }
}
