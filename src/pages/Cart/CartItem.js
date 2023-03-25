import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { CartContext } from '~/contexts/CartContext';
import React, { useContext, useEffect } from 'react';

const cx = classNames.bind(styles);

function CartItem(props) {
    const { id, name, price, photo, sale } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className={cx('cart-item')}>
            <div className={cx('thumb')}>
                <img src={photo} alt="" />
            </div>

            <div className={cx('description')}>
                <p className={cx('name')}>{name}</p>

                <p className={cx('price')}>
                    ${Math.round(price - (price * sale) / 100)} {sale !== 0 && <del> ${price}</del>}
                </p>

                <div className={cx('count-handler')}>
                    <button className={cx('sub')} onClick={() => removeFromCart(id)}>
                        -
                    </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className={cx('plus')} onClick={() => addToCart(id)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
