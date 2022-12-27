import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAlphabet'
})
export class SortByAlphabetPipe implements PipeTransform {

  transform(items: any[], field: string, field2: string): any[] {
    if (!items) {
      return [];
    }
    return items.sort((a: any, b: any) => {
      if (a?.[field]?.[field2] < b?.[field]?.[field2]) {
        return -1;
      } else if (a?.[field]?.[field2] > b?.[field]?.[field2]) {
        return 1;
      }else if (a?.[field] < b?.[field]) {
        return -1;
      } else if (a?.[field] > b?.[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
