import classNames from 'classnames/bind';
import styles from './SliderProducts.module.scss';
import dataSliderProducts from './dataSliderProducts';
import React, { useState } from 'react';
import Btn from './Btn';
import ProductItem from '~/pages/Home/PopularProducts/Product/ProductItem';

const cx = classNames.bind(styles);

function SliderProducts() {
    const [slideIndex, setSlideIndex] = useState(1);

    const slideNext = () => {
        if (slideIndex !== dataSliderProducts.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSliderProducts.length) {
            setSlideIndex(1);
        }
    };

    const slidePrev = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 3) {
            setSlideIndex(dataSliderProducts.length);
        }
    };
    console.log(slideIndex);

    return (
        <div className={cx('container-slider')}>
            <div className={cx('btn-actions')}>
                <Btn moveSlide={slideNext} direction={'next'} />
                <Btn moveSlide={slidePrev} direction={'prev'} />
            </div>
            {dataSliderProducts.map((obj, index) => {
                return (
                    <div className={slideIndex == index + 1 ? cx('slide', 'active-anim') : cx('slide')}>
                        <ProductItem key={index} data={obj} className={cx('slide-item')} />
                    </div>
                );
            })}
        </div>
    );
}

export default SliderProducts;
