import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ProductList from '../../components/ProductList/ProductList';
import styles from './shop.module.scss';

const Shop = () => {
    return (
        <div className={styles.shop}>
            <div className={styles.shop__nav}>
                <h1 className={styles.shop__title}>Our Products</h1>
                <CategoryFilter />
            </div>
            <ProductList />
        </div>
    );
};

export default Shop;
