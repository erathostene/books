import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillArray'
})
export class FillArrayPipe implements PipeTransform {

  transform(value: number, args?: any): number[] {
    return new Array(Math.round(value)).fill(1);
  }

}
