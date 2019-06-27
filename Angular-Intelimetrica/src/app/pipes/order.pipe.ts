import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(arr: any[]): any {
      for (let i = 0; i < arr.length; i++ ) {
        for (let j = 0; j < arr.length - 1 - i; j++ ) {
          if ( arr[ j ].name > arr[ j + 1 ].name ) {
            [ arr[ j ].name, arr[ j + 1 ].name ] = [ arr[ j + 1 ].name, arr[ j ].name ];
          }
        }
      }
    
      return arr;
    };
  

}
