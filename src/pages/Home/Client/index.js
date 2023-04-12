import classNames from 'classnames/bind';
import styles from './Client.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Client() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('row')}>
                    <h1 className={cx('name-logo')}>Mirrors.</h1>
                    <div className={cx('star')}>
                        <img src={images.starIcon} alt="star" />
                        <img src={images.starIcon} alt="star" />
                        <img src={images.starIcon} alt="star" />
                        <img src={images.starIcon} alt="star" />
                        <img src={images.starIcon} alt="star" />
                    </div>
                </div>

                <div className={cx('row-desc')}>
                    <p onClick={() => navigate('/about-us')} className={cx('desc')}>
                        More than 10+ stores trust Mirrors
                    </p>
                    <p className={cx('desc')}>5 Star Ratings (1k+ Review)</p>
                </div>

                <div className={cx('images')}>
                    <img src={images.client1} allt="" />
                    <img src={images.client2} allt="" />
                    <img src={images.client3} allt="" />
                    <img src={images.client4} allt="" />
                    <img src={images.client5} allt="" />
                </div>
            </div>
        </div>
    );
}

export default Client;
