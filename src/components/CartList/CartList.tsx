import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import styles from './cartList.module.scss';

const CartList = () => {
    const { cart, total } = useCart();

    return (
        <>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div className={styles.cart__list}>
                    {cart.map((item) => (
                        <CartItem cartItem={item} />
                    ))}
                    <h2 className={styles.total}>Total: ${total}</h2>
                </div>
            )}
        </>
    );
};

export default CartList;
