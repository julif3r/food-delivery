import { Restaurant } from "../types/restaurant";

export const RESTAURANTS: Restaurant[] = [
    {
        title: "Royal Sushi House",
        imageUrl: "/royal-sushi.png",
        isFeatures: true,
        cartItems: 0,
        prepareTime: "30-40 min",
        priceSum: "$32 min sum",
        categories: [
            {
                name: "Sushi",
                imageUrl: "/sushi.svg",
                active: false,
            }
        ]
    },
    {
        title: "Burgers & Pizza",
        imageUrl: "/burger-pizza.png",
        isFeatures: true,
        cartItems: 2,
        prepareTime: "40-60 min",
        priceSum: "$24 min sum",
        categories: [
            {
                name: "Burger",
                imageUrl: "/burger.svg",
                active: false,
            },
            {
                name: "Pizza",
                imageUrl: "/pizza.svg",
                active: false,
            }
        ]
    },
    {
        title: "Ninja sushi",
        imageUrl: "/ninja-sushi.png",
        isFeatures: false,
        cartItems: 3,
        prepareTime: "20-40 min",
        priceSum: "$40 min sum",
        categories: [
            {
                name: "Sushi",
                imageUrl: "/sushi.svg",
                active: false,
            },
        ]
    },
    {
        title: "Sushi master",
        imageUrl: "/sushi-master.png",
        isFeatures: false,
        cartItems: 0,
        prepareTime: "60-70 min",
        priceSum: "$49 min sum",
        categories: [
            {
                name: "Sushi",
                imageUrl: "/sushi.svg",
                active: false,
            },
        ]
    },
    {
        title: "Japanese sushi",
        imageUrl: "/japanese-sushi.png",
        isFeatures: false,
        cartItems: 0,
        prepareTime: "30-50 min",
        priceSum: "$104 min sum",
        categories: [
            {
                name: "Sushi",
                imageUrl: "/sushi.svg",
                active: false,
            },
        ]
    },
    {
        title: "Kobe",
        imageUrl: "/kobe.png",
        isFeatures: false,
        cartItems: 0,
        prepareTime: "20-30 min",
        priceSum: "$57 min sum",
        categories: [
            {
                name: "Sushi",
                imageUrl: "/sushi.svg",
                active: false,
            },
        ]
    },
]