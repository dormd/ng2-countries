import { OpaqueToken } from '@angular/core';

export const ANTHEMS_DATA = new OpaqueToken('AnthemsData');

export interface IAnthem {
    link: string,
    source: "wikimedia"
}

export class Anthems {
    [key: string]: IAnthem
}