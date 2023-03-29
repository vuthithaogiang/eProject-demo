import { faCircleInfo, faClock, faGift, faHand, faTag, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import images from '~/assets/images';
import { CartContext } from '~/contexts/CartContext';
import styles from './DetailProduct.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

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

    Date.prototype.monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    Date.prototype.getMonthName = function () {
        return this.monthNames[this.getMonth()];
    };
    Date.prototype.getShortMonthName = function () {
        return this.getMonthName().substr(0, 3);
    };

    // usage:
    var d = new Date();
    // alert(d.getMonthName()); // "October"
    // alert(d.getShortMonthName());

    const dayCurrent = new Date().getDate();
    //today
    var day = new Date(`${d.getShortMonthName()} ${dayCurrent}, 2023`);

    //next ? day
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

    //5 day later
    var fiveDay = new Date(day);
    fiveDay.setDate(day.getDate() + 5);

    var monthLater = new Date(nextDay);
    var monthLaterFive = new Date(fiveDay);

    monthLater.setDate(nextDay.getDate() + 30);
    monthLaterFive.setDate(fiveDay.getDate() + 30);

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
                        {info.title === 'Product details' &&
                            info.content.map((content, index) => <p key={index}>{content}</p>)}

                        {info.title === 'Highlights' && (
                            <>
                                <div className={cx('row-item')}>
                                    <FontAwesomeIcon icon={faHand} />
                                    <p>{info.content.madeby}</p>
                                </div>
                                <div className={cx('row-item')}>
                                    <FontAwesomeIcon icon={faClock} />
                                    <p>{info.content.type}</p>
                                </div>
                                <div className={cx('row-item-larger')}>
                                    <FontAwesomeIcon icon={faCircleInfo} className={cx('icon')} />
                                    <p>{info.content.materials}</p>
                                </div>
                            </>
                        )}

                        {info.title === 'Shipping' && (
                            <div className={cx('wrapper-shipping')}>
                                <div className={cx('estimated-arrival')}>
                                    <HeadlessTippy
                                        interactive
                                        render={(attrs) => (
                                            <PopperWrapper>
                                                <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                    If you order today, this is the{' '}
                                                    <strong>estimated delivery date</strong> and is based on the
                                                    seller's processing time and location, carrier transit time, and
                                                    your shipping address. Keep in mind: shipping carrier delays or
                                                    placing an order on a weekend or holiday may push this date.
                                                </div>
                                            </PopperWrapper>
                                        )}
                                        placement="bottom-start"
                                    >
                                        <h4 className={cx('desc')}>Estimated arrival</h4>
                                    </HeadlessTippy>
                                    <h3 className={cx('heading')}>
                                        {monthLater.getDate()} {monthLater.getMonthName()}-{monthLaterFive.getDate()}{' '}
                                        {monthLaterFive.getMonthName()}{' '}
                                    </h3>

                                    <div className={cx('estimated-container')}>
                                        <HeadlessTippy
                                            interactive
                                            render={(attrs) => (
                                                <PopperWrapper>
                                                    <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                        After you place your order, EncorePrintSociety will take 1-4
                                                        business days to prepare it for shipment.
                                                    </div>
                                                </PopperWrapper>
                                            )}
                                            placement="bottom"
                                        >
                                            <div className={cx('item')}>
                                                <div className={cx('item-icon')}>
                                                    <FontAwesomeIcon icon={faHand} />
                                                </div>
                                                <div className={cx('date')}>
                                                    {day.getDate()} {day.getMonthName()}{' '}
                                                </div>
                                                <div className={cx('status')}>Order placed</div>
                                            </div>
                                        </HeadlessTippy>

                                        <HeadlessTippy
                                            interactive
                                            render={(attrs) => (
                                                <PopperWrapper>
                                                    <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                        EncorePrintSociety puts your order in the mail.
                                                    </div>
                                                </PopperWrapper>
                                            )}
                                            placement="bottom"
                                        >
                                            <div className={cx('item')}>
                                                <div className={cx('item-icon', 'second')}>
                                                    <FontAwesomeIcon icon={faTruck} />
                                                </div>
                                                <div className={cx('date')}>
                                                    {nextDay.getDate()} {nextDay.getMonthName()} - {fiveDay.getDate()}{' '}
                                                    {fiveDay.getMonthName()}
                                                </div>
                                                <div className={cx('status')}>Order ships</div>
                                            </div>
                                        </HeadlessTippy>

                                        <HeadlessTippy
                                            interactive
                                            render={(attrs) => (
                                                <PopperWrapper>
                                                    <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                        Estimated to arrive at your doorstep {monthLater.getDate()}{' '}
                                                        {monthLater.getMonthName()}-{monthLaterFive.getDate()}{' '}
                                                        {monthLaterFive.getMonthName()}!
                                                    </div>
                                                </PopperWrapper>
                                            )}
                                            placement="bottom"
                                        >
                                            <div className={cx('item')}>
                                                <div className={cx('item-icon')}>
                                                    <FontAwesomeIcon icon={faGift} />
                                                </div>
                                                <div className={cx('date')}>
                                                    {monthLater.getDate()} {monthLater.getMonthName()} -
                                                    {monthLaterFive.getDate()} {monthLaterFive.getMonthName()}
                                                </div>
                                                <div className={cx('status')}>Delivered!</div>
                                            </div>
                                        </HeadlessTippy>
                                    </div>
                                </div>

                                <div className={cx('cost-to-ship')}>
                                    <h4 className={cx('desc')}>Cost to ship</h4>
                                    <h3 className={cx('heading')}>$113.3</h3>
                                    <div className={cx('note')}>
                                        <p>
                                            Mirror offsets carbon emissions from shipping and packaging on this
                                            purchase.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('return')}>
                                    <div className={cx('return-item')}>
                                        <h4 className={cx('desc')}>Return & exchanges</h4>
                                        <HeadlessTippy
                                            interactive
                                            render={(attrs) => (
                                                <PopperWrapper>
                                                    <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                        Buyers are responsible for return shipping costs. If the item is
                                                        not returned in its original condition, the buyer is responsible
                                                        for any loss in value.
                                                    </div>
                                                </PopperWrapper>
                                            )}
                                            placement="bottom-start"
                                        >
                                            <h3 className={cx('heading')}>Accepted</h3>
                                        </HeadlessTippy>
                                    </div>

                                    <div className={cx('return-item')}>
                                        <h4 className={cx('desc')}>Return & exchange window</h4>
                                        <HeadlessTippy
                                            interactive
                                            render={(attrs) => (
                                                <PopperWrapper>
                                                    <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                        You have 30 days from item delivery to ship this item back to
                                                        the seller.
                                                    </div>
                                                </PopperWrapper>
                                            )}
                                            placement="bottom-end"
                                        >
                                            <h3 className={cx('heading')}>30 days</h3>
                                        </HeadlessTippy>
                                    </div>
                                </div>

                                <div className={cx('instruction')}>
                                    <img src={images.hand} alt="" className={cx('hand-icon')} />
                                    <div>
                                        <strong> Etsy Purchase Protection:</strong> Shop confidently on Etsy knowing if
                                        something goes wrong with an order, we've got your back for all eligible
                                        purchases -- <Link to="">see program terms</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
}

export default Details;
