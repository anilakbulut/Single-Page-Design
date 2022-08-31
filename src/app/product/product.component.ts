import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {


  
  product: Product[];
  @Input() categoryId: number;
  @Input() sortByFilter:number;
  
  countProduct:number;
  constructor(private productService: ProductService) { 
  }
  
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data=>{
      this.product = data;
    })

  }

  



}
