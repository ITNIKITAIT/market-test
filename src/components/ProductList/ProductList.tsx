import { useEffect, useState } from 'react';
import { fetchProducts, fetchProductsByCategory } from '../../services/api';
import { IProduct } from '../../types/product';
import styles from './productList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../shared/ui/Loader/Loader';

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                if (selectedCategory) {
                    const data = await fetchProductsByCategory(
                        selectedCategory
                    );
                    setProducts(data);
                } else {
                    const data = await fetchProducts();
                    setProducts(data);
                }
            } catch (err) {
                setError('Error when loading products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [selectedCategory]);

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.list}>
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    );
};

export default ProductList;
