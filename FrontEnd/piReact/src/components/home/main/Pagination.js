import React from 'react';
import styles from '../../../styles/pagination.module.css'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination_nav}>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className={styles.page}>
                            <a onClick={() => paginate(number)} href="#" className={styles.page_link}>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;