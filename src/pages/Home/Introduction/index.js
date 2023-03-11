import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import IntroductionItem from '../IntroductionItem';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                {/* Media block */}
                <div className={cx('media-block')}>
                    <img className={cx('image')} src={images.introduction} alt="" />

                    <div className={cx('list')}>
                        <IntroductionItem />
                    </div>
                </div>

                {/* Content block */}

                <div className={cx('content-block')}>
                    <h1 className={cx('heading')}>Shopping without limits and secure payments.</h1>

                    <p className={cx('desc')}>
                        We have many styles and trends to suit any taste from Art Deco to anique in a range of shape and
                        colours.
                    </p>

                    <Button className={cx('see-more')} primary>
                        See Products
                    </Button>
                    <p className={cx('desc')}>Recent engement</p>
                    <p className={cx('states')}>
                        <strong>50K</strong>Customers
                        <strong>700+</strong> Products
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Introduction;
