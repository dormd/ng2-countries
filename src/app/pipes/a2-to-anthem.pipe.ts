import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ANTHEMS_DATA, Anthems, IAnthem } from '../models';

@Pipe({
    name: 'a2ToAnthem'
})

export class A2ToAnthemPipe implements PipeTransform {
    constructor(@Inject(ANTHEMS_DATA) private _anthemsData: Anthems) {}

    transform(value: any, args: any[]): any {
        const anthem: IAnthem = this._anthemsData[value];
        if (!anthem)
            return '';
        
        return anthem.link;
    } 
} 