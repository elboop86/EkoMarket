import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  category!: any;
  categoryName!: any;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.cargarDatos(); 
    this.categoryName = window.location.pathname.split("/").pop();
  }

  cargarDatos() {
    this.http.get<any>('../../assets/category_product.json').subscribe(
      data => {
        this.category = data.category;
      })
  }
}
