import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ShoppingNow.module.scss';

const cx = classNames.bind(styles);

function ShoppingNow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <h1 className={cx('heading')}>Always welcoming new customers</h1>
                <p className={cx('desc')}>
                    Take control dental health get the personalised care you deserver. Call (541) 772-8846 to schedule
                </p>
                <Button rounded text large className={cx('btn-shop')}>
                    Shopping Now
                </Button>
            </div>
        </div>
    );
}

export default ShoppingNow;
