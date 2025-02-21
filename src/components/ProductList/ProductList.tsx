import { useEffect, useState } from 'react';
import { fetchProducts, fetchProductsByCategory } from '../../services/api';
import { IProduct } from '../../types/product';
import styles from './productList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../shared/ui/Loader/Loader';
import PaginationBlock from '../../shared/ui/PaginationBlock/PaginationBlock';

const PAGE_SIZE = 9;

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

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
                setCurrentPage(1);
            } catch (err) {
                setError('Error when loading products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [selectedCategory]);

    const totalPages = Math.ceil(products.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className={styles.list}>
                {currentProducts.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
            <PaginationBlock
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default ProductList;
