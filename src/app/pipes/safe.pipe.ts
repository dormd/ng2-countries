import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ 
    name: 'safe' 
})

export class SafePipe implements PipeTransform {

    constructor(private _sanitizer: DomSanitizer) {}
    
    public transform(url: string) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
} 