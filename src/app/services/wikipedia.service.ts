import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaService {
  private _baseUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private _jsonp: Jsonp) {}

  public getAnthemByCountry(countrySearchToken: string) {
    // const headers = new Headers();
    // headers.append("Origin", "http://localhost:4002");
    // headers.append("Content-Type", "application/json; charset=UTF-8");

    // let wikiUrl = this._getQueryUrl(countrySearchToken);
    debugger
    
    let params = new URLSearchParams();
    params.set('titles', countrySearchToken); // the user's search value
    params.set('action', 'query');
    params.set('format', 'json');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('callback', 'JSONP_CALLBACK');
    params.set('redirects', null);
    
    // params.set('search', countrySearchToken); // the user's search value
    // params.set('action', 'opensearch');
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');

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
               })
               .do(anthemPath => console.log(anthemPath));
    
    // TODO: Add error handling
    // this._http
    //     .options(wikiUrl, { headers }).subscribe(() => {
    //         this._http
    //             .get(wikiUrl, {
    //                 // headers: headers
    //             })
    //             .subscribe((res) => {
    //                 console.log(res);
    //             });
    //                 //    .map(response => <string[]> response.json()[1]);
    //     });
  }

  private _getQueryUrl(query: string) {
      return `${this._baseUrl}?action=query&titles=${query}&prop=revisions&rvprop=content&format=json`;
  }
}
