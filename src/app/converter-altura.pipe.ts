import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterAltura',
  standalone: true
})
export class ConverterAlturaPipe implements PipeTransform {

  transform(value: number): number {
    return value/100;
  }

}
