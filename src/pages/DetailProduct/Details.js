import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { CartContext } from '~/contexts/CartContext';
import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

function Details({ product }) {
    // console.log(product);
    const [slideIndex, setSlideIndex] = useState(1);
    const [width, setWidth] = useState(0);
    const [start, setStart] = useState(0);
    const [change, setChange] = useState(9);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [infoTitle, setInfoTitle] = useState(product.infos[0].title);
    const slideRef = useRef();

    function plusSlides(n) {
        setSlideIndex((prev) => prev + n);

        slideShow(slideIndex + n);
    }

    function slideShow(n) {
        if (n > product.photo_details.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(product.photo_details.length);
        }
    }

    function dragStart(e) {
        setStart(e.clientX);
    }
    function dragEnd(e) {
        if (change > 0) {
            slideRef.current.scrollLeft += width;
        } else {
            slideRef.current.scrollLeft -= width;
        }
    }

    function dragOver(e) {
        let touch = e.clientX;
        setChange(start - touch);
    }

    useEffect(() => {
        if (!slideRef.current) {
            return;
        }

        const scrollWidth = slideRef.current.scrollWidth;
        const childrenElementCount = slideRef.current.childElementCount;
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
        // console.log(width);
    }, []);

    useEffect(() => {
        if (!slideRef.current || !width) return;
        let numOfthumb = Math.round(slideRef.current.offsetWidth / width);
        slideRef.current.scrollLeft = slideIndex > numOfthumb ? (slideIndex - 1) * width : 0;
    }, [width, slideIndex]);

    const { addToCart, cartItems } = useContext(CartContext);
    const cartItemAmount = cartItems[product.id];

    return (
        <React.Fragment>
            <section className={cx('product-details')}>
                <div className={cx('product-page-img')}>
                    {product.photo_details.map((image, index) => (
                        <div
                            key={index}
                            className={cx('my-slides')}
                            style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}
                        >
                            <div className={cx('numbertext')}>
                                {index + 1} / {product.photo_details.length}{' '}
                            </div>

                            <img src={image.src} alt="" />
                        </div>
                    ))}

                    <a href="#!" className={cx('prev')} onClick={() => plusSlides(-1)}>
                        &#10094;
                    </a>
                    <a href="#!" className={cx('next')} onClick={() => plusSlides(1)}>
                        &#10095;
                    </a>

                    <div
                        className={cx('slider-img')}
                        ref={slideRef}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        onDragEnd={dragEnd}
                    >
                        {product.photo_details.map((image, index) => (
                            <div
                                key={index}
                                className={index + 1 === slideIndex ? cx('slider-box-active') : cx('slider-box')}
                                onClick={() => setSlideIndex(index + 1)}
                            >
                                <img src={image.src} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('product-page-details')}>
                    <strong>{product.name}</strong>
                    <p className={cx('product-category')}>
                        {product.brand} - {product.category}
                    </p>

                    <p className={cx('product-price')}>
                        {Math.round(product.price - (product.price * product.sale) / 100)}$ <del>{product.price}$</del>
                    </p>

                    <p className={cx('small-desc')}>
                        {product.desc}
                        <br />
                        {product.desc_more}
                    </p>

                    <div className={cx('product-options')}>
                        <span>Colors</span>
                        {product.colors.map((color, index) => (
                            <div key={index}>
                                <button
                                    style={{ backgroundColor: color }}
                                    className={color === selectedColor ? cx('active') : cx('')}
                                    onClick={() => setSelectedColor(color)}
                                ></button>
                            </div>
                        ))}
                    </div>

                    <div className={cx('product-size')}>
                        <span>Size</span>
                        {product.size.map((size, index) => (
                            <div key={index}>{size}</div>
                        ))}
                    </div>

                    <div className={cx('product-page-offer')}>
                        <FontAwesomeIcon icon={faTag} /> {product.sale}% Sale
                    </div>

                    <div className={cx('cart-btns')}>
                        <button onClick={() => addToCart(product.id)} className={cx('add-cart')}>
                            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                        </button>

                        <Link to={'/cart'} className={cx('buy-now')}>
                            Buy now
                        </Link>
                    </div>
                </div>
            </section>
            <section className={cx('product-all-infos')}>
                <ul className={cx('product-info-menu')}>
                    {product.infos.map((info) => (
                        <li
                            key={info.title}
                            onClick={() => setInfoTitle(info.title)}
                            className={cx('product-info-list', `${info.title === infoTitle ? 'active' : ''}`)}
                        >
                            {info.title}
                        </li>
                    ))}
                </ul>

                {product.infos.map((info) => (
                    <div
                        key={info.title}
                        className={cx('info-container', `${info.title === infoTitle ? 'active' : ''}`)}
                    >
                        {info.content.map((content, index) => (
                            <p key={index}>{content}</p>
                        ))}
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
}

export default Details;
