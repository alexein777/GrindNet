import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'game-filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.toLocaleLowerCase().includes(searchText);
    });
  }

}
