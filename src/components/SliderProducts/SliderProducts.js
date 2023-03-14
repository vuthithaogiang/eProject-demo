import classNames from 'classnames/bind';
import styles from './SliderProducts.module.scss';
import dataSliderProducts from './dataSliderProducts';
import React, { useState } from 'react';
import ProductItem from '~/pages/Home/PopularProducts/Product/ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cx = classNames.bind(styles);

function SliderProducts() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel responsive={responsive} showDots={true}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </Carousel>
    );
}

export default SliderProducts;
