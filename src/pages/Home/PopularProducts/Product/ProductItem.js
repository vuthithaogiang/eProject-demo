import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <div className={cx('product-item')}>
            <a href="#!">
                <img src={data.src} alt="" className={cx('thumb')} />
            </a>

            <div className={cx('info')}>
                <div className={cx('head')}>
                    <h3 className={cx('title')}>
                        <a className={cx('line-clamp')}>{data.title}</a>
                    </h3>

                    <div className={cx('rating')}>
                        <img src={images.starIcon} alt="" className={cx('star')} />
                        <span className={cx('value')}>{data.rating}</span>
                    </div>
                </div>

                <p className={cx('desc')}>{data.desc}</p>

                <div className={cx('foot')}>
                    <span className={cx('price')}>${data.price}</span>
                    <Button rounded>Shop Now</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
