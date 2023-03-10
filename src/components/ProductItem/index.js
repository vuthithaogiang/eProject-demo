import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('name')}>mirrors wood</p>
            <p className={cx('desc')}>
                <strong className={cx('quantity')}>50</strong>
                items
            </p>
        </div>
    );
}

export default ProductItem;
