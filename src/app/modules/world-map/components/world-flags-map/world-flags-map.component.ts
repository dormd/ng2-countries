import { Component, Inject, Input }  from '@angular/core';
import { COUNTRIES_DATA, Countries } from '../../../shared/models';
import { MapCountryPositionService } from '../../services';

@Component({
    selector: 'world-flags-map',
    templateUrl: './world-flags-map.component.html',
    styleUrls: [ './world-flags-map.component.css' ],	
})

export class WorldFlagsMapComponent {
    @Input() countriesKeys: string[];
    private _mapRelationFactor = 3;
    private _wholeWidth: number;
    private _wholeHeight: number;

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries,
                private _mapCountryPositionService: MapCountryPositionService) { }

    public ngOnInit(): void {
        this._updateResolution();
    }

    private _onBestResolution(): void {
        this._mapRelationFactor = 8;
        this._updateResolution();
    }

    private _onZoomIn(): void {
        this._mapRelationFactor++;
        this._updateResolution();        
    }

    private _onZoomOut(): void {
        this._mapRelationFactor--;
        this._updateResolution();        
    }

    private _updateResolution(): void {
        this._wholeWidth = 360 * this._mapRelationFactor;
        this._wholeHeight = 180 * this._mapRelationFactor;
    }

    private _getCountryTop(alpha2: string): number {
        return this._mapCountryPositionService.getCountryTop(alpha2, this._mapRelationFactor);
    }

    private _getCountryLeft(alpha2: string): number {
        return this._mapCountryPositionService.getCountryLeft(alpha2, this._mapRelationFactor);
    }
}
