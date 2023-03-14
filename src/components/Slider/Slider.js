import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import React, { useState } from 'react';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

const cx = classNames.bind(styles);

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDote = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={cx('container-slider')}>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? cx('slide', 'active-anim') : cx('slide')}>
                        <img src={process.env.PUBLIC_URL + `/images/product${index + 1}.jpg`} alt="" />
                    </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className={cx('container-dots')}>
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDote(index + 1)}
                        className={slideIndex === index + 1 ? cx('dot', 'active') : cx('dot')}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
