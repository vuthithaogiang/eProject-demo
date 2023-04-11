import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
    const navigate = useNavigate();
    return (
        <div className={cx('product-item', className)}>
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
                    <span className={cx('price')}>
                        ${data.price - (data.price * data.sale) / 100} {data.sale > 0 && <del> ${data.price}</del>}
                    </span>
                    <Button onClick={() => navigate('/detailproduct/1')} rounded>
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
