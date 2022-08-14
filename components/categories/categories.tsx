import Image from 'next/image';
import { CATEGORIES } from '../../constants/categories';
import styles from '../../styles/Categories.module.scss';
import { Category } from '../../types/category';

interface CategoriesProps {
    categories: Category[];
    filter: (category: Category) => void;
}

export default function Categories(props: CategoriesProps) {
    return (
        <div className={styles.categories}>
            <ul className={styles.list}>
                {props.categories.map((category: Category, index: number) => {
                    return <li key={index} onClick={() => props.filter({ ...category, active: !category.active })} className={`${category.active ? styles.active : ''} ${styles.listItem}`}>
                        <span className={styles.listImage}>
                            <Image layout="fill" src={category.imageUrl} />
                        </span>
                        <span className={styles.listLabel}>
                            {category.name}
                        </span>
                    </li>
                })}

            </ul>
        </div>
    )
}
