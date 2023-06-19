import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number): string {
    let s = value % 60
    let m = Math.floor(value / 60)
    /*return (m < 10) ? '0' : '' + m + ' minutes ' +
            (s < 10) ? '0' : '' + s + ' secondes '
    */
   return `${m < 10 ? '0' : ''}${m} minute${m < 2 ?'' : 's'} ${s < 10 ? '0' : ''}${s} secondes`;
  }

}
