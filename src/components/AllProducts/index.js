import classNames from 'classnames/bind';
import styles from './AllProducts.module.scss';
import { useEffect, useState } from 'react';
import OneItem from './OneItem';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function AllProducts() {
    const [popular, setPopular] = useState([]);
    const [filered, setFiltered] = useState([]);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch('http://localhost:3000/data');
        const items = await data.json();
        console.log(items);

        setPopular(items[1].products);
        setFiltered(items[1].products);
    };
    return (
        <div className={cx('all-items')}>
            <motion.div className={cx('popular-items')}>
                {popular.map((item) => (
                    <OneItem key={item.id} data={item} />
                ))}
            </motion.div>
        </div>
    );
}

export default AllProducts;
