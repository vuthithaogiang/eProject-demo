import classNames from 'classnames/bind';
import styles from './PopularProducts.module.scss';
import Product from './Product';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PopularProducts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <div className={cx('content-body')}>
                        <h1 className={cx('heading')}>Our Popular Product</h1>
                        <p className={cx('desc')}>
                            You’ll find a number of designs in our range that are sure to look great in any room
                        </p>
                    </div>

                    <div className={cx('actions-btn')}>
                        <button className={cx('back')}>
                            <img src={images.backIcon} alt="" />
                        </button>
                        <button className={cx('next')}>
                            <img src={images.nextIcon} alt="" />
                        </button>
                    </div>
                </div>

                <div className={cx('list-products')}>
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default PopularProducts;
