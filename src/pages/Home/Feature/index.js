import classNames from 'classnames/bind';
import styles from './Feature.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Feature() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('body-top')}>
                    <div className={cx('images')}>
                        <img className={cx('lower')} src={images.product5} alt="" />
                        <img src={images.product11} alt="" />
                    </div>
                </div>
                <div className={cx('content')}>
                    <h2 className={cx('heading')}>You're found a mirror you love</h2>
                    <p className={cx('desc')}>
                        More than just a simple mirror, we provide you width the special style mirrors you want.
                    </p>
                    <p className={cx('desc')}>Many styles that you need</p>
                    <Button to={'products/All'} rounded className={cx('btn-shop')}>
                        Shop now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Feature;
