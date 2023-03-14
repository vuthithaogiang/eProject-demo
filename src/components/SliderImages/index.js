import classNames from 'classnames/bind';
import styles from './SliderImages.module.scss';
import { useRef, useEffect, useState } from 'react';
import images from '~/assets/images';

import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

const listImagse = [
    images.product15,
    images.product14,
    images.product13,
    images.product12,
    images.product11,
    images.product10,
    images.product9,
    images.product8,
];

function SliderImages() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel);

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
        <div className={cx('container')}>
            <motion.div ref={carousel} className={cx('carousel')} whileTap={{ cursor: 'grabbing' }}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={cx('inner-carousel')}>
                    {listImagse.map((image, index) => {
                        return (
                            <motion.div key={index} className={cx('item')}>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SliderImages;
