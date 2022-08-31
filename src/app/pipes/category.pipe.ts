import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryPipe implements PipeTransform {

  transform(product: Product[], categoryId: number) {
    if(categoryId == 1) return product;
    return product.filter((data: Product) =>
           data.categoryId== categoryId);
  }

  /*
  transform(categories: Category[], categoryId: number) {
    return categories.filter((data: Category) =>
           data.categoryId== categoryId);
  }*/

}


