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
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 3,
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //     },
    // };

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
            </div>

            {/* products */}

            <div className={cx('content')}>
                <div className={cx('all-items')}>
                    <motion.div layout className={cx('popular-items')}>
                        <AnimatePresence>
                            {filered.map((item) => (
                                <Link to={`/detailproduct/${item.id}`} key={item.id}>
                                    {' '}
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
