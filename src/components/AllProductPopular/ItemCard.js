import classNames from 'classnames/bind';
import styles from './ItemCard.module.scss';
import images from '~/assets/images';
import Button from '../Button';

const cx = classNames.bind(styles);

function ItemCard({ name, desc, coverPhoto, rating, price }) {
    return (
        <div className={cx('container-item')}>
            <img src={coverPhoto} alt="" className={cx('thumb')} />

            <div className={cx('info')}>
                <div className={cx('head')}>
                    <h3 className={cx('title')}>
                        <a className={cx('line-clamp')}>{name}</a>
                    </h3>

                    <div className={cx('rating')}>
                        <img src={images.starIcon} alt="" className={cx('star')} />
                        <span className={cx('value')}>{rating}</span>
                    </div>
                </div>

                <p className={cx('desc')}>{desc}</p>

                <div className={cx('foot')}>
                    <span className={cx('price')}>${price}</span>
                    <Button rounded>Shop Now</Button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
