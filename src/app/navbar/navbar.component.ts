import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  category: Category[];
  constructor(private categoryService: CategoryService) { }
  
  @Output() categoryId = new EventEmitter<number>;
  @Output() sortByFilter = new EventEmitter<number>;

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data=>{
      this.category = data;
    })
    this.categoryId.emit(1);
    this.sortByFilter.emit(0);
  }

  getCategory(value:any){
    this.categoryId.emit(value);
  }
  getFilter(value:any){
    this.sortByFilter.emit(value);
  }



}
