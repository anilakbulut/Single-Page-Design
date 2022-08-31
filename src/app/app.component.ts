import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FigmaProject';
  
  categoryId:number;
  sortByFilter:number;

  addCategoryId(value: any) {
    this.categoryId = value;
  }

  sortByFilterValue(value: any){
    this.sortByFilter = value;
  }
}
