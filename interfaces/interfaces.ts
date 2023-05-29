import { StaticImageData } from 'next/image';

export interface ICardData {
    id: string,
    img: StaticImageData,
    title: string,
    price: number,
    link: string
}

export interface IHomeSliderData {
    id: string,
    img: StaticImageData,
    title: string,
    descr: string,
    link: string
}

export interface IPopularCategoriesData {
    id: string,
    title: string,
    img: StaticImageData
}

export interface IPOpularBrendsData {
    img:StaticImageData
}

export interface IStockCardData {
    id:string,
    img:StaticImageData,
    title:string,
    price:number,
    discount:string,
    link:string
}

export interface IReviewsCardData {
    id:string,
    img:StaticImageData,
    name:string,
    reviews:string,
    date:string
}

export interface IOrderCardData {
    id:string,
    icon:StaticImageData,
    text:string
}

export interface IDocumentationCardData {
    id:string,
    img:StaticImageData,
    title: string,
    file: string,
    link:string
}