import { Category } from "./category";

export interface Restaurant{
    title: string,
    imageUrl: string;
    isFeatures: boolean;
    cartItems: number;
    prepareTime: string;
    priceSum: string;
    categories: Category[];
}