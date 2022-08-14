import Image from 'next/image';
import styles from '../../styles/Restaurants.module.scss';
import { Category } from '../../types/category';
import { Restaurant } from '../../types/restaurant';

interface RestaurantsProps {
    restaurants: Restaurant[];
}

export default function Restaurants(props: RestaurantsProps) {
    return (
        <div className={styles.restaurants}>
            <div className={styles.title}>Nearby Restaurants</div>
            <div className={styles.list}>
                {props.restaurants.map((restaurant: Restaurant, index: number) => {
                    return <div key={index} className={styles.listItem}>
                        <div className={styles.listImage}>
                            <Image layout="fill" src={restaurant.imageUrl} />
                            {restaurant.isFeatures &&
                                <div className={styles.listImageCategory}>
                                    Featured
                                </div>
                            }
                        </div>
                        <div className={styles.listContent}>
                            <div className={styles.listTitle}>
                                <span className={styles.listTitleLabel}>
                                    {restaurant.title}
                                </span>
                                <div className={`${styles.listCartIcon} ${restaurant.cartItems > 0 ? styles.active : ''}`}>
                                    <Image layout="fill" src="/shopping-bag.svg" />
                                    {restaurant.cartItems > 0 &&
                                        <span className={styles.listCartIconNumber}>
                                            {restaurant.cartItems}
                                        </span>
                                    }
                                </div>
                            </div>

                            <div className={styles.listTime}>
                                <div className={styles.listTimeLabel}>
                                    <div className={styles.listTimeLabelImage}>
                                        <Image layout="fill" src="/clock.svg" />
                                    </div>
                                    <span>
                                        {restaurant.prepareTime}
                                    </span>
                                </div>
                                <div className={styles.listTimeDivider}></div>
                                <div className={styles.listTimeLabel}>
                                    <span>
                                        {restaurant.priceSum}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.listCategories}>
                                {restaurant.categories.map((category: Category, index: number) => {
                                    return <div key={index} className={styles.listCategory}>
                                        <span className={styles.listCategoryIcon}>
                                            <Image layout="fill" src={category.imageUrl} />
                                        </span>
                                        <span className={styles.listCategoryLabel}>{category.name}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {props.restaurants.length === 0 &&
                <div className={styles.noData}>No restaurants found!</div>}
        </div>
    )
}
