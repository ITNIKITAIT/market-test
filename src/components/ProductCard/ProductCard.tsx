import toast from 'react-hot-toast';
import { useCart } from '../../context/CartContext';
import Button from '../../shared/ui/Button/Button';
import { IProduct } from '../../types/product';
import styles from './productCard.module.scss';

const ProductCard = ({ product }: { product: IProduct }) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        toast.success('Product was added to cart');
        addToCart(product);
    };

    return (
        <div key={product.id} className={styles.card}>
            <div className={styles.card__image}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.card__info}>
                <div>
                    <h3 className={styles.card__title}>{product.title}</h3>
                    <h5 className={styles.card__category}>
                        {product.category}
                    </h5>
                    <p className={styles.card__price}>${product.price}</p>
                </div>
                <Button onClick={handleAdd}>ADD TO CART</Button>
            </div>
        </div>
    );
};

export default ProductCard;
