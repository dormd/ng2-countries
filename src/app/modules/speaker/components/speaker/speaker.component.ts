import { Component, Input }   from '@angular/core';
import { SpeakerService }     from '../../services';

@Component({
    selector: 'speaker',
    templateUrl: './speaker.component.html',
    // styleUrls: [ './speaker.component.css' ],	
})

export class SpeakerComponent {
    @Input() text: string;
    @Input() language = 'US English';
    @Input() gender = 'Female';

    constructor(private _speakerService: SpeakerService) {}

    public speak() {
        this._speakerService.speak(this.text, this.language, this.gender);
    }
}
