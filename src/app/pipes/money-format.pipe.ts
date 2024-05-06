import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat',
  standalone: true
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value){
      return ''; // Returns an empty string if the value is null or undefined
    }
    const [min, max] : string[] = value.split('-'); // Split the value in two parts, minimum and maximum, if the value has a range

    if (min && max) {
      return `$${min}-${max} million`;
    } else if (min) {
      return `$${min} million`;
    } else if (max) {
      return `$${max} million`;
    } else {
      return '';
    }
  }



}
