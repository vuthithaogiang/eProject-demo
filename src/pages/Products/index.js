import classNames from 'classnames/bind';
import styles from './Products.module.scss';

import AllProduct from '~/components/AllProductPopular';
import Filter from './Sidebar/Filter';
import Item from './Item';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Products() {
    const [popular, setPopular] = useState([]);
    const [filered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch('http://localhost:3000/products');
        const items = await data.json();
        console.log(items);

        setPopular(items);
        setFiltered(items);
    };

    function handleSortPriceAsc() {
        const sortedDataAsc = [...popular].sort((a, b) => {
            return a.price - (a.price * a.sale) / 100 > b.price - (b.price * b.sale) / 100 ? 1 : -1;
        });
        console.log('asc:', sortedDataAsc);
        setFiltered(sortedDataAsc);
    }

    function handleSortPriceDesc() {
        const sortedDataDesc = [...popular].sort((a, b) => {
            return a.price - (a.price * a.sale) / 100 < b.price - (b.price * b.sale) / 100 ? 1 : -1;
        });
        console.log('desc:', sortedDataDesc);
        setFiltered(sortedDataDesc);
    }

    function handleSortRatingAsc() {
        const sortedDataRatingAsc = [...popular].sort((a, b) => {
            return a.rating > b.rating ? 1 : -1;
        });
        setFiltered(sortedDataRatingAsc);
    }

    function handleSortRatingDesc() {
        const sortedDataRatingDesc = [...popular].sort((a, b) => {
            return a.rating < b.rating ? 1 : -1;
        });
        setFiltered(sortedDataRatingDesc);
    }

    function handleSortNameAsc() {
        const sortedDataNameAsc = [...popular].sort((a, b) => {
            return a.name.trim().toLowerCase() > b.name.trim().toLowerCase() ? 1 : -1;
        });

        setFiltered(sortedDataNameAsc);
    }

    function handleSortNameDesc() {
        const sortedDataNameDesc = [...popular].sort((a, b) => {
            return a.name.trim().toLowerCase() < b.name.trim().toLowerCase() ? 1 : -1;
        });

        setFiltered(sortedDataNameDesc);
    }

    function handleSale() {
        const productSale = [...popular].filter((a) => {
            return a.sale > 0;
        });

        setFiltered(productSale);
    }

    return (
        <div className={cx('wrapper')}>
            {/* side bar */}
            <div className={cx('container-sidebar')}>
                <Filter
                    popular={popular}
                    setFiltered={setFiltered}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre}
                />

                <div className={cx('contaner-sorted')}>
                    <h4 className={cx('sorted-tilte')}>Sorted</h4>

                    <div className={cx('sorted-selection')}>
                        <div className={cx('sort')}>
                            <span className={cx('item-sort')} onClick={handleSale}>
                                Sale off
                            </span>
                            <span className={cx('item-sort')} onClick={handleSortPriceAsc}>
                                Price Ascending
                            </span>
                            <br />
                            <span className={cx('item-sort')} onClick={handleSortPriceDesc}>
                                Price Descending
                            </span>
                            <br />

                            <span className={cx('item-sort')} onClick={handleSortRatingAsc}>
                                Rating Ascending
                            </span>
                            <br />

                            <span className={cx('item-sort')} onClick={handleSortRatingDesc}>
                                Rating Descending
                            </span>
                            <br />

                            <span className={cx('item-sort')} onClick={handleSortNameAsc}>
                                Name Ascending
                            </span>
                            <br />

                            <span className={cx('item-sort')} onClick={handleSortNameDesc}>
                                Name Descending
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* products */}

            <div className={cx('content')}>
                <div className={cx('all-items')}>
                    <motion.div layout className={cx('popular-items')}>
                        <AnimatePresence>
                            {filered.map((item) => (
                                <Link to={`/detailproduct/${item.id}`} key={item.id}>
                                    <Item data={item} />
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <AllProduct />
            </div>
        </div>
    );
}

export default Products;
