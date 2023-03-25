import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { CartContext } from '~/contexts/CartContext';
import { useContext } from 'react';
import { PRODUCTS } from '~/data/product';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const cx = classNames.bind(styles);

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className={cx('container-cart')}>
            <div className={cx('title')}>
                {totalAmount > 0 ? <h1>Your cart items</h1> : <h1>Your cart is Empty</h1>}
            </div>
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
    );
}

export default Cart;
