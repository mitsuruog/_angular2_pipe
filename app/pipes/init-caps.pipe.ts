import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'initCaps'
})
export class InitCapsPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, (m) => m.toUpperCase());
  }
}