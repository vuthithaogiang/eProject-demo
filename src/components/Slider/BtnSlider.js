import React from 'react';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function BtnSlider({ moveSlide, direction }) {
    console.log(direction, moveSlide);
    const classNames = cx('btn-slide', direction);
    return (
        <button onClick={moveSlide} className={classNames}>
            <img src={direction === 'next' ? images.nextIcon : images.backIcon} />
        </button>
    );
}

export default BtnSlider;
