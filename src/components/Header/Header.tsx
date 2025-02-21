import { Link } from 'react-router-dom';
import Container from '../../shared/ui/Container/Container';
import styles from './header.module.scss';
import { useCart } from '../../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
    const { cart } = useCart();

    return (
        <header className={styles.header}>
            <Container>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/cart">
                        <ShoppingCart
                            className={styles['cart-icon']}></ShoppingCart>
                        <div className={styles['cart-quantity']}>
                            {cart.length}
                        </div>
                    </Link>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
