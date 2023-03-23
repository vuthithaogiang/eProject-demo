import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

// const product = {
//     id: 1,
//     name: 'The Artus Mirror',
//     slug: 'the-artius-mirror',
//     desc: 'Get the best mirror, gain style and decorate for your home.',
//     desc_more:
//         'Bring a playful spin to your wall décor with this abstract-shaped mirror. Equipped with a small, rectangular shelf with five hooks for hanging your twinkling treasures, keys and more! Crafted using engineered wood with vibrant finishes that add a fresh pop of color to your wall. Available exclusively at Urban Outfitters.',
//     desc_details: 'vintage frame gold small',
//     rating: 4.5,
//     price: 780,
//     size: ['24 x 36 inches'],
//     photo: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634522319-L9C59HRI8XLHRZDS0142/Bedroom+Makeover+-+Her86m2+-_-92.jpg?format=750w',
//     genreIds: [10, 1, 14, 16],
//     sale: 10,
//     photo_details: [
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653639037341-G08DXMC2OTNHY0MED0PH/71+-+Bedroom+Makeover+-+Her86m2+24.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634142136-XI8676QPQIZJV1V8U0NP/Bedroom+Makeover+-+Her86m2+-_-26.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634196616-OH1NTXZSSQRH5H5E8H80/Bedroom+Makeover+-+Her86m2+-_-12.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634198504-TKHE4QRGRY8P8C3L6X5I/Bedroom+Makeover+-+Her86m2+-_-7.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634309696-48GW0WO36DZD4IVKBJ7H/Bedroom+Makeover+-+Her86m2+-_-117.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634443060-8HMO0H6Z5JY8RABAS1IU/Bedroom+Makeover+-+Her86m2+-_-50.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634518629-DVUBURI5OWA25GSCJLAO/Bedroom+Makeover+-+Her86m2+-_-67.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634521655-RYMCXYYU7P2HNIU4V90K/Bedroom+Makeover+-+Her86m2+-_-91.jpg?format=1500w',
//         },
//         {
//             src: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1653634522319-L9C59HRI8XLHRZDS0142/Bedroom+Makeover+-+Her86m2+-_-92.jpg?format=1500w',
//         },
//     ],
//     infos: [
//         {
//             title: 'Product details',
//             content: [
//                 'Makeup Mirror With Wooden Base, Round Makeup Mirror, Table Top Makeup Mirror. ',
//                 'This beautiful mirror will accompany you while you make up or take photos. It will also provide you convenience with its wooden base that you can use everywhere.',
//                 'The mirror is a real glass mirror. Base it is natural plywood. The color of the mirror base can be different. This is because every tree is different.',
//             ],
//         },

//         {
//             title: 'Highlights',
//             content: ['materials'],
//         },
//         {
//             title: 'How to use',
//             content: ['how to use'],
//         },
//         {
//             title: 'Shipping',
//             content: ['pro tips'],
//         },
//     ],
//     colors: ['#d8d5ba'],
//     qty: 52,
//     category: 'Mirror for every room.',
//     brand: 'Handmade',
// };

function Details({ product }) {
    console.log(product);
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
        console.log(width);
    }, []);

    useEffect(() => {
        if (!slideRef.current || !width) return;
        let numOfthumb = Math.round(slideRef.current.offsetWidth / width);
        slideRef.current.scrollLeft = slideIndex > numOfthumb ? (slideIndex - 1) * width : 0;
    }, [width, slideIndex]);

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
                        <Link to={''} className={cx('add-cart')}>
                            Add to Cart
                        </Link>

                        <Link to={''} className={cx('buy-now')}>
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
