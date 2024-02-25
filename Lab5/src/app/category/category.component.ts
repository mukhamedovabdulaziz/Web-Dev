import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories = [
    {
      name: 'Телефоны и гаджеты',
      img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
      category: 'gadjets',
    },
    {
      name: 'Бытовая техника',
      img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home App.png',
      category: 'home',
    },
    {
      name: 'ТВ, Аудио, Видео',
      img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png',
      category: 'tv',
    },
    {
      name: 'Компьютеры',
      img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png',
      category: 'computers',
    },
  ];

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate([category]);
  }
}
