import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './paginationBlock.module.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationBlock = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    return (
        <div className={styles.pagination}>
            <button
                className={styles.pagination__btn}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                <ChevronLeft />
            </button>

            <span>
                {currentPage} / {totalPages}
            </span>

            <button
                className={styles.pagination__btn}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                <ChevronRight />
            </button>
        </div>
    );
};

export default PaginationBlock;
