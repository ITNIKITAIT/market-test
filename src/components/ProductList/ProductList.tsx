import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import { Product } from '../../types/product';
import styles from './productList.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError('Error when loading products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
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
