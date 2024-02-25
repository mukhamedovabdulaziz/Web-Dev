// product-item.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['productId'];
      this.product = products.find((product) => product.id === productId);
    });
  }

  likeProduct() {
    if (this.product) {
      this.product.likes = (this.product.likes || 0) + 1;
    }
  }

  share(link: string, text: string) {
    const message = encodeURIComponent(`${text}: ${link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  removeProduct() {
    if (this.product) {
      products.splice(products.indexOf(this.product), 1);
      this.router.navigate(['/product-list']);
    }
  }
}
