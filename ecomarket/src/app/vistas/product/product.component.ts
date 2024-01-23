import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  path! : any;
  categories : any;
  products : any = [];
  vista: boolean = false;

  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.path = window.location.pathname.split("/product/").pop();
    this.cargarDatos();
  }

  cargarDatos() {
    this.http.get<any>('../../assets/category_product.json').subscribe(
      data => {
         this.categories = data.category; 
         for (let item of this.categories){
          if (item.products != undefined) {
            for (let product of item.products) {
              const found = this.products.some((value: { id: any; }) =>  value.id === product.id);
              if (!found) {
                this.products.push(product);
              }
            }
          }
         }
      })
  }
}
