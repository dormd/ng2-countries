import { Component, Input }   from '@angular/core';

@Component({
    selector: 'app-anthem',
    templateUrl: './anthem.component.html',
    // styleUrls: [ './anthem.component.css' ],	
})

export class AnthemComponent {
    @Input() alpha2: string;

    private _isShow = false;
    private _height = 1;

    public constructor() { }

    private _onLoad() {
        setTimeout(() => {
            this._height = 20;
        }, 1000)
    }
}
