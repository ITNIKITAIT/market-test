import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import styles from './cartItem.module.scss';
import toast from 'react-hot-toast';
import { ICartItem } from '../../types/cart';

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
    const { removeFromCart } = useCart();
    const { product } = cartItem;
    const handleRemove = () => {
        removeFromCart(product.id);
        toast.success('Cart item was deleted');
    };

    return (
        <div key={product.id} className={styles.cart__item}>
            <h4>{product.title}</h4>
            <p>{product.price} $</p>
            <p>Quantity: {cartItem.quantity}</p>
            <button className={styles['btn-remove']} onClick={handleRemove}>
                <X />
            </button>
        </div>
    );
};

export default CartItem;
