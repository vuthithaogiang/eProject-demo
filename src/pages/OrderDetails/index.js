import classNames from 'classnames/bind';
import styles from './OrderDetails.module.scss';
import { Link, useParams } from 'react-router-dom';

import React, { useContext } from 'react';
import { CartContext } from '~/contexts/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCartFlatbedSuitcase, faGift } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../Cart/CartItem';
import { PRODUCTS } from '~/data/product';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OrderDetails() {
    //let params = useParams();
    const { cartItems } = useContext(CartContext);

    const invoice = JSON.parse(localStorage.getItem('invoice'));
    console.log(invoice);
    // useEffect(() => {
    //     if (invoice && invoice.id === params.id) {
    //         setOrderInfo(invoice);
    //     } else {
    //         fetchDetails();
    //     }
    // }, [params.id]);

    return (
        <>
            <div className={cx('wrapper-order-details')}>
                <h1>Your order details</h1>
                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('shipping-address')}>
                            <h4>Shipping Address</h4>
                            <p className={cx('user-name')}>{invoice.customer_name}</p>
                            <p className={cx('address')}>
                                {invoice.address.address_line_1}, {invoice.address.admin_area_2}
                            </p>
                            <p>Country code: {invoice.address.country_code}</p>
                            <p>Postal code: {invoice.address.postal_code}</p>
                        </div>
                        <div className={cx('payment-method')}>
                            <h4>Payment method</h4>
                            <div>
                                <FontAwesomeIcon icon={faPaypal} />
                                Paypal
                            </div>
                        </div>
                    </div>

                    <div className={cx('order-summary')}>
                        <h4>Order summary</h4>
                        <p>
                            Item(s) total <span> ${Number(invoice.amount.value) - 113} </span>
                        </p>
                        <p>
                            Shipping <span>$113</span>
                        </p>
                        <p>
                            Tax(*): <span>$0</span>
                        </p>
                        <p className={cx('total')}>
                            Order total(items) <span>${invoice.amount.value}</span>
                        </p>
                        <p className={cx('note')}>Local taxes includes (where applicated)</p>
                        <p className={cx('note')}>* Additional duties and tax may apply</p>

                        <div>
                            <p>
                                By paid your order to {invoice.address.address_line_1}, you agree to Mirrors's{' '}
                                <Link to="/purchase-protection">Terms of Use</Link> and{' '}
                                <Link to="/purchase-protection">Privacy Policy.</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('items')}>
                    <div className={cx('header-items')}>
                        <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                        <div className={cx('logo')}>
                            <h4>Mirrors</h4>
                            <p>
                                Estimated delivery:
                                <HeadlessTippy
                                    interactive
                                    render={(attrs) => (
                                        <PopperWrapper>
                                            <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                                If you order today, this is the <strong>estimated delivery date</strong>{' '}
                                                and is based on the seller's processing time and location, carrier
                                                transit time, and your shipping address. Keep in mind: shipping carrier
                                                delays or placing an order on a weekend or holiday may push this date.
                                            </div>
                                        </PopperWrapper>
                                    )}
                                    placement="right-start"
                                >
                                    <span> {invoice.estimated_date} </span>
                                </HeadlessTippy>
                                <br />
                                Ready to ship 1-4 business days from United States
                            </p>
                        </div>
                    </div>

                    {/* list items */}

                    <div className={cx('list-item')}>
                        <div className={cx('item')}>
                            {PRODUCTS.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem key={product.id} data={product} />;
                                }
                            })}
                        </div>

                        <img src={images.desc} alt="" />
                    </div>
                </div>

                <div className={cx('navbar-list')}>
                    <p> © 2023 Mirrors, Inc.</p>
                    <Link to="/purchase-protection">Terms of Use</Link>
                    <Link to="/products/All">Local Shops</Link>
                    <Link>Regions</Link>
                    <Link to="/purchase-protection">Privacy</Link>
                    <Link to="/feedback">Help Center</Link>
                </div>

                <div className={cx('thanks-quote')}>
                    <FontAwesomeIcon icon={faGift} />
                    <p>
                        Your order made our day - We hope that this makes yours! Your support means the world, we would
                        love if you could share a snap on social media.
                    </p>
                </div>
            </div>
        </>
    );
}

export default OrderDetails;
