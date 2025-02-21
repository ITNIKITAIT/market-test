import { Link } from 'react-router-dom';
import Container from '../../shared/ui/Container/Container';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
