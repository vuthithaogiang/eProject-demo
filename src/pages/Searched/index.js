import classNames from 'classnames/bind';
import styles from './Searched.module.scss';

import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from 'react';
import Item from '../Products/Item';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Searched() {
    const [searchedItem, setSearchedItem] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`http://localhost:3000/products?q=${name}`);
        const items = await data.json();

        setSearchedItem(items);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    function handleSortPriceAsc() {
        const sortedDataAsc = [...searchedItem].sort((a, b) => {
            return a.price - (a.price * a.sale) / 100 > b.price - (b.price * b.sale) / 100 ? 1 : -1;
        });
        console.log('asc:', sortedDataAsc);
        setSearchedItem(sortedDataAsc);
    }

    function handleSortPriceDesc() {
        const sortedDataDesc = [...searchedItem].sort((a, b) => {
            return a.price - (a.price * a.sale) / 100 < b.price - (b.price * b.sale) / 100 ? 1 : -1;
        });
        console.log('desc:', sortedDataDesc);
        setSearchedItem(sortedDataDesc);
    }

    function handleSortRatingAsc() {
        const sortedDataRatingAsc = [...searchedItem].sort((a, b) => {
            return a.rating > b.rating ? 1 : -1;
        });
        setSearchedItem(sortedDataRatingAsc);
    }

    function handleSortRatingDesc() {
        const sortedDataRatingDesc = [...searchedItem].sort((a, b) => {
            return a.rating < b.rating ? 1 : -1;
        });
        setSearchedItem(sortedDataRatingDesc);
    }

    function handleSortNameAsc() {
        const sortedDataNameAsc = [...searchedItem].sort((a, b) => {
            return a.name.trim().toLowerCase() > b.name.trim().toLowerCase() ? 1 : -1;
        });

        setSearchedItem(sortedDataNameAsc);
    }

    function handleSortNameDesc() {
        const sortedDataNameDesc = [...searchedItem].sort((a, b) => {
            return a.name.trim().toLowerCase() < b.name.trim().toLowerCase() ? 1 : -1;
        });

        setSearchedItem(sortedDataNameDesc);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-sidebar')}>
                <>
                    <h4 className={cx('title')}>Genres</h4>
                    <div className={cx('filter-container')}>
                        <Link to={'/searched/mirror'} className={cx('item')}>
                            All
                        </Link>
                        <Link to={'/searched/Vintage'} className={cx('item')}>
                            Vintage
                        </Link>
                        <Link to={'/searched/Retro'} className={cx('item')}>
                            Retro
                        </Link>
                        <Link to={'/searched/Normal'} className={cx('item')}>
                            Normal
                        </Link>
                        <Link to={'/searched/Wood'} className={cx('item')}>
                            Wood
                        </Link>
                        <Link to={'/searched/Handmade'} className={cx('item')}>
                            Handmade
                        </Link>
                        <Link to={'/products/Frame'} className={cx('item')}>
                            Frame
                        </Link>
                        <Link to={'/searched/Frameless'} className={cx('item')}>
                            Frameless
                        </Link>
                        <Link to={'/searched/Gold'} className={cx('item')}>
                            Gold
                        </Link>
                        <Link to={'/searched/Green'} className={cx('item')}>
                            Green
                        </Link>
                        <Link to={'/searched/Black'} className={cx('item')}>
                            Black
                        </Link>
                        <Link to={'/searched/White'} className={cx('item')}>
                            White
                        </Link>
                        <Link to={'/searched/Colorful'} className={cx('item')}>
                            Coloful
                        </Link>
                    </div>
                </>

                <div className={cx('contaner-sorted')}>
                    <h4 className={cx('sorted-tilte')}>Sorted</h4>

                    <div className={cx('sorted-selection')}>
                        <div className={cx('sort')}>
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

            <div className={cx('content')}>
                <motion.div layout className={cx('popular-items')}>
                    <AnimatePresence>
                        {searchedItem.map((item) => (
                            <Link to={`/detailproduct/${item.id}`} key={item.id}>
                                <Item data={item} />
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default Searched;
