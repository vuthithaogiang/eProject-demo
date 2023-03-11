import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('name')}>{data.name}</p>
            <p className={cx('desc')}>
                <strong className={cx('quantity')}>{data.qty}</strong>
                items
            </p>
        </div>
    );
}

export default ProductItem;
