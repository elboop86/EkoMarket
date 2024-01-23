import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() inputData!: any;
  productNumber : number = 1;

  constructor(private router : Router) {}

  ngOnInit() {
    if (this.inputData == null) {
      this.router.navigate(['/login']);
    } else {
      console.log(this.inputData);
    }
  }

  add(){
    let value = document.getElementById('count'+this.productNumber)!.innerHTML;
    document.getElementById('count'+this.productNumber)!.innerHTML = (1 + parseInt(value, 10)).toString();
  }

  remove(){
    let value = document.getElementById('count'+this.productNumber)!.innerHTML;
    document.getElementById('count'+this.productNumber)!.innerHTML = (parseInt(value, 10) - 1).toString();
  }
}
