import { useEffect, useState } from 'react'
import Categories from '../components/categories/categories'
import Header from '../components/header/header'
import Offerts from '../components/offerts/offerts'
import Restaurants from '../components/restaurants/restaurants'
import { CATEGORIES } from '../constants/categories'
import { RESTAURANTS } from '../constants/restaurants'
import { Category } from '../types/category'
import { Restaurant } from '../types/restaurant'
import { filterRestaurants, getActiveCategoryNames } from '../utility/restaurantFilters'

interface HomepageProps {
  categories: Category[],
  restaurants: Restaurant[],
}

export default function Home(props: HomepageProps) {
  const [searchInput, setSearchInput] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>(props.categories);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(props.restaurants);

  const updateCategories = (category: Category) => {
    const _categories: Category[] = categories.map((cat: Category) => {
      return cat.name === category.name ? category : cat
    });
    setCategories(_categories);
  }

  useEffect(() => {
    const _categoryNames: string[] = getActiveCategoryNames(categories);
    setRestaurants(filterRestaurants(props.restaurants, _categoryNames, searchInput));
  }, [categories, searchInput, props.restaurants]);

  return (
    <>
      <Header input={searchInput} setInput={setSearchInput} />
      <div className="container">
        <Offerts />
        <Categories categories={categories} filter={updateCategories} />
        <Restaurants restaurants={restaurants} />
      </div>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }
  }
}
