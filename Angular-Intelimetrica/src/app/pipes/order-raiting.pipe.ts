import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderRaiting'
})
export class OrderRaitingPipe implements PipeTransform {

  transform(arr: any[]): any {
    for (let i = 0; i < arr.length; i++ ) {
      for (let j = 0; j < arr.length - 1 - i; j++ ) {
        if ( arr[ j ].rating > arr[ j + 1 ].rating ) {
          [ arr[ j ].rating, arr[ j + 1 ].rating ] = [ arr[ j + 1 ].rating, arr[ j ].rating ];
        }
      }
    }
  
    return arr;
  };

}
