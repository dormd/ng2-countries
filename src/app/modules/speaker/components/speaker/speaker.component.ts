import { Component, Input, OnChanges }   from '@angular/core';
import { SpeakerService }     from '../../services';

@Component({
    selector: 'speaker',
    templateUrl: './speaker.component.html',
    styleUrls: [ './speaker.component.css' ],	
})

export class SpeakerComponent implements OnChanges {
    @Input() text: string; 
    @Input() language = 'eng';
    @Input() gender = 'Female';

    private _isSpeakerExist = false;

    constructor(private _speakerService: SpeakerService) {}

    public ngOnChanges() {
        this._isSpeakerExist = this._speakerService.isSpeakerExist(this.language);
    }

    private _speak() {
        this._speakerService.speak(this.text, this.language, this.gender);
    }
}
