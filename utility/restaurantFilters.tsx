import { Category } from "../types/category";
import { Restaurant } from "../types/restaurant";

export const filterRestaurants = (restaurants: Restaurant[], categories: string[], input?: string): Restaurant[] => {
    const _restaurants: Restaurant[] = [];
    restaurants.forEach((restaurant: Restaurant) => {
        const _matchCategories = restaurant.categories.filter((c: Category) => categories.includes(c.name));
        if (_matchCategories.length > 0) {
            const _catsNames: string[] = restaurant.categories.map((c: Category) => c.name);
            if (input) {
                if (restaurant.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 || _catsNames.includes(input.toLowerCase())) {
                    _restaurants.push(restaurant)
                }
            } else {
                _restaurants.push(restaurant)
            }
        }
    })
    return _restaurants
}

export const getActiveCategoryNames = (categories: Category[]): string[] => {
    return categories.filter((f: Category) => f.active).map((category: Category) => category.name);
}