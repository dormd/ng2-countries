import { Component, Input }   from '@angular/core';

@Component({
    selector: 'anthem',
    templateUrl: './anthem.component.html',
})

export class AnthemComponent {
    @Input() alpha2: string;

    private _isShow = false;
    private _height = 1;

    public constructor() { }

    private _onLoad(): void {
        setTimeout(() => {
            this._height = 20;
        }, 1000)
    }
}
