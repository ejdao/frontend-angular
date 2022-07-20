import { Pipe, PipeTransform } from '@angular/core';
import * as lang from './lang';

@Pipe({
  name: 'errorMsg',
})
export class ErrorMsgPipe implements PipeTransform {
  public transform(parameter: string, language: string = 'en'): string {
    let resources = lang.en;
    if (language === 'es') {
      resources = lang.es;
    }
    return resources[parameter];
  }
}
