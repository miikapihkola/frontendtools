import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter',
  standalone: true
})
export class AppFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    };
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      console.log(it)
      return it.Title.toLocaleLowerCase().includes(searchText);
    });
  }
}
