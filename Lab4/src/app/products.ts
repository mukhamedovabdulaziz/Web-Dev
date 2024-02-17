export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

export const products = [
  {
    id: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    description: `тип: сетевая зарядка
    количество подключаемых устройств: 1
    быстрая зарядка: Да
    разъем подключения: USB Type-C`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
  },
  {
    id: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=preview-large',
    name: 'Apple iPhone 11 128Gb Slim Box черный',
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A13 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3110.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
  },
  {
    id: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    name: 'Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
    description: `тип: сетевая зарядка
    количество подключаемых устройств: 1
    быстрая зарядка: Да
    разъем подключения: USB Type-C`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000',
  },
  {
    id: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    name: 'Apple iPhone 13 128Gb Midnight черный',
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3095.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
  },
  {
    id: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large',
    name: 'Apple iPhone 14 128Gb черный',
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3279.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
  },
  {
    id: 6,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=preview-large',
    name: 'Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый',
    description: `технология NFC: Да
    цвет: серый
    тип экрана: AMOLED, сенсорный, мультитач
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 732G
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=750000000',
  },
  {
    id: 7,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=preview-large',
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    description: `технология NFC: Нет
    цвет: черный
    тип экрана: IPS, сенсорный
    диагональ: 6.79 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный MediaTek Helio G88
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
  },
  {
    id: 8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large',
    name: 'Apple iPhone 13 128Gb белый',
    description: `технология NFC: Да
    цвет: белый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3095.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
  },
  {
    id: 9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h13/h10/64408714674206.jpg?format=preview-large',
    name: 'Smart Case для Apple iPhone 13 прозрачный',
    description: `тип: накладка с защитой камеры
    совместимый бренд: Apple
    материал: силикон
    совместимые модели: iPhone 13`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
  },
  {
    id: 10,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=preview-large',
    name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.5 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 8-ядерный MediaTek Helio G99
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
  },
];
