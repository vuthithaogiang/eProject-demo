import classNames from 'classnames/bind';

import styles from './AllProduct.module.scss';
import Popular from './Popular';

const cx = classNames.bind(styles);

function AllProduct() {
    return (
        <div className={cx('container')}>
            <Popular />
            {/* <Veggie /> */}
        </div>
    );
}

export default AllProduct;
