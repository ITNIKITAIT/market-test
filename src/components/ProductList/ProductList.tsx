import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import { Product } from '../../types/product';

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
                setError('Error');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} width={100} />
                    <h3>{product.title}</h3>
                    <p>{product.price} $</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
