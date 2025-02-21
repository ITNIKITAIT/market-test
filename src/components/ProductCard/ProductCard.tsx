import Button from '../../shared/ui/Button/Button';
import { Product } from '../../types/product';
import styles from './productCard.module.scss';

const ProductCard = ({ product }: { product: Product }) => {
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
                <Button>ADD TO CART</Button>
            </div>
        </div>
    );
};

export default ProductCard;
