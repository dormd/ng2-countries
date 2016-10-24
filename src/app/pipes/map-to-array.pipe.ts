import { Pipe, PipeTransform } from '@angular/core';

interface IMap {
    [key: string]: any;
}

interface IMapArrayItem {
    key: string,
    value: any
}

@Pipe({
    name: 'mapToArray'
})

export class MapToArrayPipe implements PipeTransform {
    constructor() {}

    public transform(map: IMap, args: any[]): IMapArrayItem[] {
        if (!map)
            return [];
        
        return _.keys(map).map((key: string) => {
            return {
                key,
                value: map[key]
            };
        });
    } 
} 

