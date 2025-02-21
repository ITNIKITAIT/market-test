import { ReactNode } from 'react';
import styles from './button.module.scss';

const Button = ({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick?: (arg0: any) => any;
}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;
