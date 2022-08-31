import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filterBySort'
})
export class FilterPipe implements PipeTransform {

  transform(product: Product[], sortByFilter: number){
    if(sortByFilter==0) return product;

    if(sortByFilter==3){ // Highest Price
      return product.sort((a, b) => (a.productPrice < b.productPrice) ? 1 : -1);
    }

    if(sortByFilter==2){ // Lowest Price
      return product.sort((a, b) => (a.productPrice > b.productPrice) ? 1 : -1);
    }

    if(sortByFilter==1){ // Lowest Price
      return product.sort((a, b) => (a.productId < b.productId) ? 1 : -1);
    }

    return product;
    
  }

}
