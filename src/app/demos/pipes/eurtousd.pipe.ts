import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtousd'
})
export class EurtousdPipe implements PipeTransform {

  transform(value: number, currency : string): string {
    return value * 1.09 + currency;
  }

}
