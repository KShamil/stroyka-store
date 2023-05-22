import {
  ICardData,
  IHomeSliderData,
  IOrderCardData,
  IPOpularBrendsData,
  IPopularCategoriesData,
  IReviewsCardData,
  IStockCardData,
} from "@/interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";
import CardImg1 from "./images/card-img/Image.png";
import CardImg2 from "./images/card-img/Image (1).png";
import CardImg3 from "./images/card-img/Image (2).png";
import CardImg4 from "./images/card-img/Image (3).png";
import CardImg5 from "./images/card-img/Image (4).png";
import CardImg6 from "./images/card-img/Image (5).png";
import CardImg7 from "./images/card-img/Image (6).png";
import CardImg8 from "./images/card-img/Image (7).png";
import CardImg9 from "./images/card-img/Image (8).png";
import CardImg10 from "./images/card-img/Image (9).png";
import CardImg11 from "./images/card-img/Image (10).png";
import CardImg12 from "./images/card-img/Image (11).png";
import HomeSliderImg1 from "./images/home-slider-img/image 52.png";
import HomeSliderImg2 from "./images/home-slider-img/image 51.png";
import PopularCategoriesImg1 from "./images/popular-categories-img/image 56.png";
import PopularCategoriesImg2 from "./images/popular-categories-img/image 48.png";
import PopularCategoriesImg3 from "./images/popular-categories-img/image 49.png";
import PopularCategoriesImg4 from "./images/popular-categories-img/image 53.png";
import PopularCategoriesImg5 from "./images/popular-categories-img/image 54.png";
import PopularCategoriesImg6 from "./images/popular-categories-img/image 55.png";
import PopularCategoriesImg7 from "./images/popular-categories-img/image 86.png";
import PopularCategoriesImg8 from "./images/popular-categories-img/image 87.png";
import PopularCategoriesImg9 from "./images/popular-categories-img/image 88.png";
import PopularCategoriesImg10 from "./images/popular-categories-img/pngwing 1.png";
import PopularCategoriesImg11 from "./images/popular-categories-img/image 89.png";
import PopularCategoriesImg12 from "./images/popular-categories-img/image 90.png";
import PopularBrendsImg1 from "./images/popular-brends-img/img1.png";
import PopularBrendsImg2 from "./images/popular-brends-img/img2.png";
import PopularBrendsImg3 from "./images/popular-brends-img/img3.png";
import PopularBrendsImg4 from "./images/popular-brends-img/img4.png";
import PopularBrendsImg5 from "./images/popular-brends-img/img5.png";
import PopularBrendsImg6 from "./images/popular-brends-img/img6.png";
import PopularBrendsImg7 from "./images/popular-brends-img/img7.png";
import PopularBrendsImg8 from "./images/popular-brends-img/img8.png";
import PopularBrendsImg9 from "./images/popular-brends-img/img9.png";
import PopularBrendsImg10 from "./images/popular-brends-img/img10.png";
import PopularBrendsImg11 from "./images/popular-brends-img/img11.png";
import PopularBrendsImg12 from "./images/popular-brends-img/img12.png";
import SctockCardImg1 from "./images/stock-card-img/img1.png";
import SctockCardImg2 from "./images/stock-card-img/img2.png";
import SctockCardImg3 from "./images/stock-card-img/img3.png";
import SctockCardImg4 from "./images/stock-card-img/img4.png";
import Avatar1 from "./images/reviews-card-data/Avatars1.png";
import Avatar2 from "./images/reviews-card-data/Avatars2.png";
import Avatar3 from "./images/reviews-card-data/Avatars3.png";
import Avatar4 from "./images/reviews-card-data/Avatars4.png";
import OrderIcon1 from './images/order-card-img/icon1.png';
import OrderIcon2 from './images/order-card-img/icon2.png';
import OrderIcon3 from './images/order-card-img/icon3.png';
import OrderIcon4 from './images/order-card-img/icon4.png';

export const cardData: ICardData[] = [
  {
    id: uuidv4(),
    img: CardImg1,
    title: "Керамогранит Yasmin 598х185 коричневый C-YA4M112D",
    price: 899,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg2,
    title: "Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг",
    price: 275,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg3,
    title: "Грунтовка Старатели 10л глубокого проникновения",
    price: 839,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg4,
    title: "Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
    price: 335,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg5,
    title: "Профиль 0,55мм для гипсокартона",
    price: 195,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg6,
    title: "Рулетка 3м",
    price: 100,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg7,
    title: "Кнауф Мп 75 штукатурка гипсовая МН 30кг",
    price: 380,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg8,
    title: "Уголок серый канализационный Д110 ГР90",
    price: 335,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg9,
    title: "Knauf Ротбанд, 30 кг",
    price: 508,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg10,
    title: "Саморез по металлу 3,5х25 мм для гипсокартона",
    price: 340,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg11,
    title: "Шпатлевка универсальная Danogips SuperFinish 17 л",
    price: 2.555,
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: CardImg12,
    title: "Клейкая лента металлизированная Изоспан FL 5х5000 см",
    price: 226,
    link: "В корзину",
  },
];

export const homeSliderData: IHomeSliderData[] = [
  {
    id: uuidv4(),
    img: HomeSliderImg1,
    title: "Специальные предложения",
    descr: "на строительные материалы и товары для ремонта",
    link: "Подробнее",
  },
  {
    id: uuidv4(),
    img: HomeSliderImg2,
    title: "Распродажа инструментов",
    descr:
      "«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой",
    link: "Подробнее",
  },
];

export const popularCategoriesData: IPopularCategoriesData[] = [
  {
    id: uuidv4(),
    title: "Душевые",
    img: PopularCategoriesImg1,
  },
  {
    id: uuidv4(),
    title: "Пиломатериалы",
    img: PopularCategoriesImg2,
  },
  {
    id: uuidv4(),
    title: "Линолеум",
    img: PopularCategoriesImg3,
  },
  {
    id: uuidv4(),
    title: "Обои",
    img: PopularCategoriesImg4,
  },
  {
    id: uuidv4(),
    title: "Инструменты",
    img: PopularCategoriesImg5,
  },
  {
    id: uuidv4(),
    title: "Товары для дачи",
    img: PopularCategoriesImg6,
  },
  {
    id: uuidv4(),
    title: "Окна",
    img: PopularCategoriesImg7,
  },
  {
    id: uuidv4(),
    title: "Двери",
    img: PopularCategoriesImg8,
  },
  {
    id: uuidv4(),
    title: "Сантехника",
    img: PopularCategoriesImg9,
  },
  {
    id: uuidv4(),
    title: "Краски",
    img: PopularCategoriesImg10,
  },
  {
    id: uuidv4(),
    title: "Электротовары",
    img: PopularCategoriesImg11,
  },
  {
    id: uuidv4(),
    title: "Интерьер",
    img: PopularCategoriesImg12,
  },
];

export const popularBrendsData: IPOpularBrendsData[] = [
  {
    img: PopularBrendsImg1,
  },
  {
    img: PopularBrendsImg2,
  },
  {
    img: PopularBrendsImg3,
  },
  {
    img: PopularBrendsImg4,
  },
  {
    img: PopularBrendsImg5,
  },
  {
    img: PopularBrendsImg6,
  },
  {
    img: PopularBrendsImg7,
  },
  {
    img: PopularBrendsImg8,
  },
  {
    img: PopularBrendsImg9,
  },
  {
    img: PopularBrendsImg10,
  },
  {
    img: PopularBrendsImg11,
  },
  {
    img: PopularBrendsImg12,
  },
];

export const stockCardData: IStockCardData[] = [
  {
    id: uuidv4(),
    img: SctockCardImg1,
    title: "Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)",
    price: 449,
    discount: "499 ₽",
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: SctockCardImg2,
    title: "Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная",
    price: 495,
    discount: "660 ₽",
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: SctockCardImg3,
    title: 'Сетка "Рабица" яч. 50х50/1,5х10 м-ОЦ',
    price: 1.499,
    discount: "1 890 ₽",
    link: "В корзину",
  },
  {
    id: uuidv4(),
    img: SctockCardImg4,
    title: "Металлочерепица, цвет коричневый, 1.18 х 1.15 м",
    price: 769,
    discount: "999 ₽",
    link: "В корзину",
  },
];

export const reviewsCardData: IReviewsCardData[] = [
  {
    id: uuidv4(),
    img: Avatar1,
    name: "Пётр",
    reviews:
      "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
    date: "21 марта 2022 г.",
  },
  {
    id: uuidv4(),
    img: Avatar2,
    name: "Анна",
    reviews:
      "Живу в п.Володарский МО, очень были рады открытию магазина СтройкаСтор. Хорошие сотрудники, но особенно хочется отметить работу Алексея за его помощь в решении проблем, очень квалифицированные рекомендации по подбору строительных материалов для ремонта. Хороший ассортимент",
      date: "18 марта 2022 г.",
  },
  {
    id: uuidv4(),
    img: Avatar3,
    name: "Виктор",
    reviews:
      "Заказывал в данном магазине строй материалы. Привезли их вовремя и в прекрасном состоянии, претензий к доставке, персоналу и прочему меня нет. Строй материалы мне понравились, ремонт с ними я сделал отличный. Магазин мне безумно понравился, обязательно обращусь сюда снова, большое спасибо",
      date: "6 ноября 2021 г.",
  },
  {
    id: uuidv4(),
    img: Avatar4,
    name: "Дмитрий",
    reviews:
      "Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.",
      date: "5 ноября 2021 г.",
  },
];

export const orderCardData:IOrderCardData[] = [
  {
    id:uuidv4(),
    icon:OrderIcon1,
    text:'Добавьте нужные товары в корзину и оплатите заказ'
  },
  {
    id:uuidv4(),
    icon:OrderIcon2,
    text:'Получите уведомления о подтверждении вашего заказа'
  },
  {
    id:uuidv4(),
    icon:OrderIcon3,
    text:'После подтверждения мы сформируем ваш заказ'
  },
  {
    id:uuidv4(),
    icon:OrderIcon4,
    text:'Заберите из пунктов выдачи'
  },
]