import classNames from 'classnames/bind';
import styles from './IntroductionItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function IntroductionItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <img src={images.introduction1} alt="" />
                </div>
                <div className={cx('info')}>
                    <p className={cx('label')}>Different Rooms</p>
                    <p className={cx('title')}>A collection of stylish mirrors.</p>
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <img src={images.introduction2} alt="" />
                </div>
                <div className={cx('info')}>
                    <p className={cx('label')}>Decorations</p>
                    <p className={cx('title')}>Stylish mirrors for any theme.</p>
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <img src={images.introduction3} alt="" />
                </div>
                <div className={cx('info')}>
                    <p className={cx('label')}>Free Fixings</p>
                    <p className={cx('title')}>Free fixings for all type of mirrors.</p>
                </div>
            </div>
        </div>
    );
}

export default IntroductionItem;
