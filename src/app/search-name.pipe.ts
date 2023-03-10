import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' || filterString === undefined) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName].includes(filterString) ) {
        resultArray.push(item);
      }
    }
    return resultArray;
    
  }

}
