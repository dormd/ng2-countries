import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class WikipediaService {
  private _baseUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private _jsonp: Jsonp) {}

  // unused function
  public fetchAnthemByCountry(countrySearchToken: string) {
    let params = new URLSearchParams();
    params.set('titles', countrySearchToken); // the user's search value
    params.set('action', 'query');
    params.set('format', 'json');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('callback', 'JSONP_CALLBACK');
    params.set('redirects', null);
    
    return this._jsonp
               .get(this._baseUrl, { search: params })
               .map(response => response.json().query.pages)
               .map((pages: Object) => {
                   const page = _.keys(pages)[0]
                   return pages[page].revisions[0]['*'];
               })
               .map((content: string) => {
                   const anthemSectionIndex = content.indexOf('anthem');
                   const fileStartIndicationStr = '[[File:';
                   const filePathIndex = content.indexOf(fileStartIndicationStr, anthemSectionIndex) + fileStartIndicationStr.length;
                   
                   const fileEndIndicationStr = '.ogg';                   
                   const filePathLastIndex = content.indexOf(fileEndIndicationStr, filePathIndex);
                   return content.substring(filePathIndex, filePathLastIndex + fileEndIndicationStr.length); 
               })
               .map((filePath: string) => {
                   if (filePath.length <= 120)
                        return filePath;
                    return '';
               })
               .map((filePathWithSpaces: string) => {
                   return filePathWithSpaces.split(' ').join('_');
               });
  }
}
