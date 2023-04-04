import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { CartContext } from '~/contexts/CartContext';
import { useContext } from 'react';
import { PRODUCTS } from '~/data/product';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const cx = classNames.bind(styles);

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

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();
    let amountValue = totalAmount + 113;

    const navigate = useNavigate();

    return (
        <>
            <div className={cx('header-cart')}>
                <img src={images.hand} alt="" />
                <div className={cx('content')}>
                    <p>
                        <strong>Buy confidently </strong>
                        with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item
                        doesn't arrive, arrives damaged, or isn't as described.{' '}
                        <Link to="/purchase-protection">See eligibility</Link>
                    </p>
                </div>
            </div>
            {totalAmount > 0 ? (
                <>
                    <div className={cx('wrapper')}>
                        <div className={cx('container-cart')}>
                            <div className={cx('title')}>{totalAmount > 0 && <h1>Your cart items</h1>}</div>
                            <div className={cx('cart-items')}>
                                {PRODUCTS.map((product) => {
                                    if (cartItems[product.id] !== 0) {
                                        return <CartItem key={product.id} data={product} />;
                                    }
                                })}
                            </div>

                            {totalAmount > 0 && (
                                <div className={cx('checkout')}>
                                    <p>Subtotal: ${totalAmount}</p>
                                    <div className={cx('action-btns')}>
                                        <button onClick={() => navigate('/products/All')} className={cx('continue')}>
                                            Continue Shopping
                                        </button>
                                        <button className={cx('buy-now')}>Checkout</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={cx('checkout')}>
                            <div className={cx('note')}>
                                <p>
                                    <FontAwesomeIcon icon={faPaperclip} /> Add a note to us{' '}
                                </p>

                                <textarea
                                    id="message"
                                    className={cx('form-textarea')}
                                    name="message"
                                    placeholder="Write your note (optional)..."
                                ></textarea>
                            </div>

                            <HeadlessTippy
                                interactive
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div className={cx('content-inner')} tabIndex="-1" {...attrs}>
                                            If you order today, this is the <strong>estimated delivery date</strong> and
                                            is based on the seller's processing time and location, carrier transit time,
                                            and your shipping address. Keep in mind: shipping carrier delays or placing
                                            an order on a weekend or holiday may push this date.
                                        </div>
                                    </PopperWrapper>
                                )}
                                placement="right-start"
                            >
                                <div className={cx('shipping')}>
                                    <h3>
                                        Shipping: <span>$113</span>
                                    </h3>
                                    <p>
                                        Estimated delivery:{' '}
                                        <span>
                                            {monthLater.getDate()} {monthLater.getMonthName()} -
                                            {monthLaterFive.getDate()} {monthLaterFive.getMonthName()}
                                        </span>{' '}
                                        from United States
                                    </p>
                                </div>
                            </HeadlessTippy>

                            <div className={cx('items-total')}>
                                <h3>
                                    Item(s) total: <span>${totalAmount} </span>
                                </h3>
                                <h3>
                                    Total (items): <span>${totalAmount + 113}</span>
                                </h3>
                            </div>

                            <PayPalScriptProvider
                                options={{
                                    'client-id':
                                        'ARO2YIjmmRbeeaIIjklrVE5Qdnoza3_UQhOp-DffG5tw3ulIRStZq2VpQ_hwVxMtIwLRdRd43L_d46TD',
                                }}
                            >
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: amountValue,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(function (details) {
                                            alert('Transaction completed by ' + details.payer.name.given_name);
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h3 className={cx('no-item')}> Your cart is empty!</h3>
                </>
            )}
        </>
    );
}

export default Cart;
