import classNames from 'classnames/bind';
import Button from '~/components/Button';
import ListProduct from '~/components/ListProduct';
import styles from './FeatureBelow.module.scss';

const cx = classNames.bind(styles);

function FeatureBelow() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('content')}>
                        <h1 className={cx('heading')}>Handmade Wall Mirror</h1>

                        <Button to={'products/All'} className={cx('btn-view-all')} text>
                            View All Items
                        </Button>
                    </div>
                </div>
            </div>

            <ListProduct />
        </>
    );
}

export default FeatureBelow;
