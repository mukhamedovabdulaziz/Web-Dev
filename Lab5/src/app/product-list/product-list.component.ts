import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.products = products.filter(product => product.category === category);
      } else {
        this.products = [...products];
      }
    });
  }

  share(link: string, text: string) {
    const message = encodeURIComponent(`${text}: ${link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
}
