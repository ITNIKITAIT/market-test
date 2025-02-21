import { ReactNode } from 'react';
import styles from './button.module.scss';

const Button = ({ children }: { children: ReactNode }) => {
    return <button className={styles.button}>{children}</button>;
};

export default Button;
