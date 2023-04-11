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
                    Decorate your home by contacting us to advise on the most suitable mirror. Call (541) 772-8846 to
                    schedule or Send Feedback.
                </p>
                <Button to={'/feedback'} rounded text large className={cx('btn-shop')}>
                    Send Feedback
                </Button>
            </div>
        </div>
    );
}

export default ShoppingNow;
