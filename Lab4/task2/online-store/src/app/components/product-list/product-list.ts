import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
 products: Product[] = [
  {
    id: 1,
    name: 'Сортер Набор развивающих игрушек',
    description: 'Развивашки — игры, помогающие совершенствовать мелкую моторику, развивающие мышление, творческое воображение, закрепляющие навыки самостоятельного выбора решений.',
    price: 2750,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe8/p76/8929738.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcc/p76/8929739.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/sorter-nabor-razvivajuschih-igrushek-derevo-108447545/?c=750000000'
  },
  {
    id: 2,
    name: 'Планшет MagPad LCD',
    description: 'Планшет для рисования LCD – это удобное и современное устройство для творчества детей.',
    price: 545,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hec/68019899269150.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hec/68019899269150.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hfc/86929447747614.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h26/hbe/86929447682078.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/planshet-magpad-lcd-846906-rozovyi-108501451/?c=750000000'
  },
  {
    id: 3,
    name: 'Подгузники Mello L',
    description: 'Обновленные наушники с активным шумоподавлением и разъемом USB-C для зарядки.',
    price: 6800 ,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/pea/64259949.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p67/pea/64259949.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p47/p7e/58709215.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p80/p7e/58709217.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/podguzniki-mello-l-54-sht-16200247/?c=750000000'
  },

  {
    id: 4,
    name: 'Удочки и спиннинги Kabi Мини рыбалка',
    description: 'Ваш малыш только начинает развивать моторику? Тогда эта игра точно для Вас.',
    price: 699 ,
    rating: 4.1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd0/p4a/52604786.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pd0/p4a/52604786.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb4/p4a/52604787.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p10/p48/52604790.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/udochki-i-spinningi-kabi-mini-rybalka-derevo-101703488/?c=750000000'
  },

  {
    id: 5,
    name: 'Прорезыватель YINLE Манхэттенский шар',
    description: 'Эта детская погремушка – грызунок разработана с учетом всех требований безопасности для Вашего малыша.',
    price: 1471 ,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hac/84219584086046.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h24/hac/84219584086046.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h0c/84252742680606.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/h14/84252742746142.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/prorezyvatel-yinle-manhettenskii-shar-plastik-silikon-113793320/?c=750000000'
  },

  {
    id: 6,
    name: 'Детское пюре ФрутоНяня банан, яблоко, творог',
    description: 'ФрутоНяня пюре яблочно-банановое с творогом для питания детей раннего возраста. ',
    price: 390,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h4f/84933630459934.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hac/h4f/84933630459934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h5d/86758586810398.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3e/h3a/86758586875934.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/frutonjanja-banan-jabloko-tvorog-90-g-100975502/?c=750000000'
  },

  {
    id: 7,
    name: 'Книжка-игрушка Aurora Toki Cat',
    description: 'Книжка-игрушка Aurora Toki Cat — увлекательное развлечение для маленьких исследователей, способствующее развитию навыков и логического мышления.',
    price: 4500,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/ha1/86416059007006.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h12/ha1/86416059007006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd4/h4e/86416059203614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h04/86416059334686.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/knizhka-igrushka-aurora-toki-cat-plastik-karton-120934895/?c=750000000'
  },

  {
    id: 8,
    name: 'Мягкая игрушка пингвин',
    description: 'Мягкая игрушка в виде пингвина высотой 21 см станет отличным подарком для детей от 2 лет. ',
    price: 1490 ,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h16/67735209476126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h73/he5/67735209738270.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-pingvin-vysota-21-sm-mul-tikolor-108379343/?c=750000000'
  },

  {
    id: 9,
    name: 'Погремушка Лесная мастерская «Маракасы с картинкой»',
    description: 'Подходят для детей, которые любят музыку и игры, а также для родителей, стремящихся развивать внимание и усидчивость своих малышей.',
    price: 399 ,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h83/85473085489182.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h66/h83/85473085489182.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h56/h40/85473085554718.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h93/85473085620254.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/pogremushka-lesnaja-masterskaja-marakasy-s-kartinkoi-derevo-117564377/?c=750000000'
  },

  {
    id:10 ,
    name: 'Подушка-игрушка Кот Батон',
    description: 'Мягкая, милая игрушка-подушка в виде длинного серого кота не только украсит интерьер, но и поможет расслабиться.',
    price: 3880,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p60/16879184.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p60/16879184.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6f/p60/16879185.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p53/p60/16879186.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/podushka-igrushka-kot-baton-kot-vysota-110-sm-seryi-102413266/?c=750000000'
  }
];
}