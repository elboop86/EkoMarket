import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  datos: any[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService){}

  ngOnInit(){
    this.cargarDatos(); 
  }

  cargarDatos() {
    this.http.get<any>('../../assets/category_product.json').subscribe(
      data => {
        for (let item of data.category) {
          switch (window.location.pathname) {
            case ("/products"): {
              if (item.products != undefined) {
                for (let product of item.products) {
                  const found = this.datos.some((value) =>  value.id === product.id);
                  if (!found) {
                    this.datos.push(product);
                  }
                }
              }
              break;
            }
            case ("/novedades"): {
              if (item.href == '/novedades')
              this.datos = item.products;
              break;
            }
            case ("/ofertas"): {
              if (item.href == '/ofertas')
              this.datos = item.products;
              break;
            }
            case ("/packs"): {
              if (item.href == '/packs')
              this.datos = item.products;
              break;
            }
            case ("/frutas"): {
              if (item.href == '/frutas')
              this.datos = item.products;
              break;
            }
            case ("/verdurashortalizas"): {
              if (item.href == '/verdurashortalizas')
              this.datos = item.products;
              break;
            }
            case ("/temporada"): {
              if (item.href == '/temporada')
              this.datos = item.products;
              break;
            }
            case ("/"): {
              if (item.href == '/novedades')
              this.datos = item.products;
              break;
            }
          } 
        }
      })
  }

  addToCart(item: any) {
    const url = 'api/usuarios/addtocart'; 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.authService.getToken() != null) {

      const cartData = {
        user: this.authService.getToken(),
        product: item.id,
        name: item.name,
        price: item.price,
        kgprice: item.kgprice,
        quantity: 1,
        imgsrc: item.imgsrc
      };

      this.http.post(url, cartData, { headers }).subscribe(
        (response) => {
          console.log('cart registrado:', response);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
  
}

