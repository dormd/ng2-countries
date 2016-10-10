import { Component, Inject } from '@angular/core';
import { COUNTRIES_DATA, Countries } from './models/countries.model';

import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _countriesKeys: string[];

  constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) {
    this._countriesKeys = _.keys(this._countriesData);
  }
}
