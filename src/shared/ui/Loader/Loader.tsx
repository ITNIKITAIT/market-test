import { LoaderCircleIcon } from 'lucide-react';
import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles['loader-wrapper']}>
            <LoaderCircleIcon className={styles.loader} />
        </div>
    );
};

export default Loader;
