import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCategories } from '../../services/api';
import styles from './categoryFilter.module.scss';

const CategoryFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                setError('Error when loading categories');
            } finally {
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    const handleCategoryChange = (category: string | null) => {
        const params = new URLSearchParams();
        if (category) {
            params.set('category', category);
        }
        setSearchParams(params);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.categories}>
            <button
                className={!selectedCategory ? styles['category-active'] : ''}
                onClick={() => handleCategoryChange(null)}>
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={
                        selectedCategory === category
                            ? styles['category-active']
                            : ''
                    }
                    onClick={() => handleCategoryChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
