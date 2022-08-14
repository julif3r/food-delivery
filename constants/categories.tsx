import { Category } from "../types/category";

export const CATEGORIES: Category[] = [
    {
        name: 'Pizza',
        imageUrl: '/pizza.svg',
        active: true,
    },
    {
        name: 'Burger',
        imageUrl: '/burger.svg',
        active: true,
    },
    {
        name: 'BBQ',
        imageUrl: '/meat.svg',
        active: false,
    },
    {
        name: 'Sushi',
        imageUrl: '/sushi.svg',
        active: true,
    },
    {
        name: 'Vegan',
        imageUrl: '/broccoli.svg',
        active: false,
    },
    {
        name: 'Desert',
        imageUrl: '/cake.svg',
        active: false,
    }
]  