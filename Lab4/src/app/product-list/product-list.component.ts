import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(link: string, text: string) {
    const message = encodeURIComponent(`${text}: ${link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
