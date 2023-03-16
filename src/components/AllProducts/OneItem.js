import classNames from 'classnames/bind';

import styles from './AllProducts.module.scss';
import Button from '../Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OneItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a href="#!">
                <img src={data.photo} alt="" className={cx('thumb')} />
            </a>

            <div className={cx('info')}>
                <div className={cx('head')}>
                    <h3 className={cx('title')}>
                        <a className={cx('line-clamp')}>{data.name}</a>
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

export default OneItem;
