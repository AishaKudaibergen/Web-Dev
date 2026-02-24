import { Product } from '../../models/product.model';
import { Category } from '../../models/category';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Детские товары' },
  { id: 2, name: 'Книги' },
  { id: 3, name: 'Одежда' },
  { id: 4, name: 'Товары для дома' }
];

export const PRODUCTS: Product[] = [
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'Сортер Набор',
    description: 'Развивающая игрушка для мелкой моторики.',
    price: 2750, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sorter-nabor-108447545/'
  },
  { id: 2, categoryId: 1, likes: 0, name: 'Пингвин игрушка', description: 'Мягкая игрушка.', price: 1480, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-pingvin-vysota-21-sm-mul-tikolor-108379343/?c=750000000' },
  { id: 3, categoryId: 1, likes: 0, name: 'Маракасы', description: 'Деревянная погремушка.', price: 399, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h83/85473085489182.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/pogremushka-lesnaja-masterskaja-marakasy-s-kartinkoi-derevo-117564377/?c=750000000' },
  { id: 4, categoryId: 1, likes: 0, name: 'Мини рыбалка', description: 'Развивающая игра с магнитами.', price: 699, rating: 4.1, image: 'https://resources.cdn-kaspi.kz/img/m/p/pd0/p4a/52604786.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/udochki-i-spinningi-kabi-mini-rybalka-derevo-101703488/?c=750000000' },
  { id: 5, categoryId: 1, likes: 0, name: 'Манхэттенский шар', description: 'Прорезыватель для зубов.', price: 1471, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hac/84219584086046.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/prorezyvatel-yinle-manhettenskii-shar-plastik-silikon-113793320/?c=750000000' },

  //
  {
    id: 6, categoryId: 2, likes: 0,
    name: 'Книга Клир Д.: Атомные привычки',
    description: 'Лучшая деловая книга 2018 года',
    price: 3477, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000'
  },
  { id: 7, categoryId: 2, likes: 0, name: 'Книга Исабеков Д.: Гауһар тас', description: 'Дулат Исабековтың бұл повесі қазақтың халық әнімен аттас.', price: 1200, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000' },
  { id: 8, categoryId: 2, likes: 0, name: 'Книга Клейсон Дж.: Самый богатый человек в Вавилоне', description: 'Эта книга - настоящее лекарство от нищеты', price: 2800, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h47/64549494358046.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kleison-dzh-samyi-bogatyi-chelovek-v-vavilone-102531708/?c=750000000' },
  { id: 9, categoryId: 2, likes: 0, name: 'Книга Әуезов М.: Абай жолы 1-4 том', description: 'Роман-эпопея Мухтара Ауэзова.', price: 8800, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/he6/63766500212766.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/-uezov-m-abai-zholy-1-4-tom-26016813/?c=750000000' },
  { id: 10, categoryId: 2, likes: 0, name: 'Книга Кийосаки Р.: Богатый папа, бедный папа для подростков', description: 'Возможность каждому подростку получить элементарные основы финансовой грамотности и добиться своей цели', price: 3500, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h66/86499723509790.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kiiosaki-r-bogatyi-papa-bednyi-papa-dlja-podrostkov-100003438/?c=750000000' },

  //
  { id: 11, categoryId: 3, likes: 0, name: 'Худи SHYGYS  Oversize', description: 'Удобное худи, черное ', price: 8500, rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/p36/75159223.jpeg?format=gallery-large', link: 'https://kaspi.kz/shop/p/hudi-shygys-oversize-inst-strc-wear-30417211-400284988-chernyi-xs-148784282/?c=750000000' },
  { id: 12, categoryId: 3, likes: 0, name: 'Футболка без принта', description: 'Базовая футболка на каждый день.', price: 2500, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p28/59740332.jpeg?format=gallery-medium', link: 'http://kaspi.kz/shop/p/futbolka-iu-brand-bez-printa-oversaiz-futbolka-hlopok-23322222-belyi-2xl-144404470/?c=750000000' },
  { id: 13, categoryId: 3, likes: 0, name: 'Шорты', description: 'Повседневные шорты серый, белый', price: 1800, rating: 4.4, image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/h49/87141899599902.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/povsednevnye-shorty-17896355-887135604-seryi-belyi-48-129934475/?c=750000000&hasVariants=true' },
  { id: 14, categoryId: 3, likes: 0, name: 'Джинсы Denim', description: 'Джинсы прямые Denim бежевый, песочный.', price: 5000, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pd0/p63/40662068.jpeg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/dzhinsy-prjamye-denim-6222-bezhevyi-pesochnyi-w27-139206768/?c=750000000' },
  { id: 15, categoryId: 3, likes: 0, name: 'Кепка', description: 'Стильный аксессуар от солнца.', price: 1500, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/hf0/85768955756574.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kepka-345868-razmer-universal-nyi-chernyi-118504838/?c=750000000' },

  //
  { id: 16, categoryId: 4, likes: 0, name: 'Увлажнитель воздуха', description: 'Ультразвуковой напольный бесшумный увлажнитель воздуха', price: 45000, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p5f/92189259.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-tono496-uvlazhnitel-vozduha-tono496-hd-903-belyi-chernyi-150822142/?c=750000000' },
  { id: 17, categoryId: 4, likes: 0, name: 'PROSPERO светильник', description: 'PROSPERO декоративный светильник настольный с эффектом заката NB604-3, красный', price: 2000, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/hc8/65100412583966.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/prospero-dekorativnyi-svetil-nik-s-effektom-zakata-nb604-3-steklo-105611216/?c=750000000' },
  { id: 18, categoryId: 4, likes: 0, name: 'Набор ножей', description: 'Профессиональные ножи для кухни.', price: 2000, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h62/67724400623646.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/ametst-nabor-nozhei-376689-lezvie-nerzhavejuschaja-stal-4-sht-108373274/?c=750000000' },
  { id: 19, categoryId: 4, likes: 0, name: 'Aurora швабра Water spraymop', description: 'Швабра Water spraymop от бренда Aurora предназначена для эффективной уборки полов и стен, обеспечивая легкость и удобство в использовании', price: 1500, rating: 5.0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/65276684959774.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/aurora-shvabra-water-spraymop-belyi-107398721/?c=750000000' },
  { id: 20, categoryId: 4, likes: 0, name: 'Термос', description: 'Держит тепло до 12 часов.', price: 1000, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h68/65324228739102.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/klassicheskii-termos-smart-0-5-l-090909-chernyi-107419811/?c=750000000' }
];