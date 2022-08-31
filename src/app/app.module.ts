import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryPipe } from './pipes/category.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DesignPageComponent } from './design-page/design-page.component';
import { DesingpagetwoComponent } from './desingpagetwo/desingpagetwo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    CategoryPipe,
    FilterPipe,
    DesignPageComponent,
    DesingpagetwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
