import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('row')}>
                    {/* Column 1 */}
                    <div className={cx('column')}>
                        <div className={cx('logo')}>
                            <img src={images.logo} alt="Mirrors" />
                            <span className={cx('title-logo')}>Mirrors.</span>
                        </div>

                        <p className={cx('desc')}>
                            Lounge mirrors can create a glorious focal point on your mantelpiece, alongside cheval
                            designs which can act as an enchanting corner feature.
                        </p>
                    </div>
                    {/* Column 2 */}

                    <div className={cx('column')}>
                        <h3 className={cx('title')}>Store</h3>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#!">About Us</a>
                            </li>
                            <li>
                                <a href="#!">Feature</a>
                            </li>
                            <li>
                                <a href="#!">Our Pricing</a>
                            </li>
                            <li>
                                <a href="#!">Latest News</a>
                            </li>
                        </ul>
                        <h3 className={cx('title')}>Support</h3>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#!">Help center</a>
                            </li>
                            <li>
                                <a href="#!">Account information</a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 13*/}

                    <div className={cx('column')}>
                        <h3 className={cx('title')}>Support</h3>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#!">Help center</a>
                            </li>
                            <li>
                                <a href="#!">Help center</a>
                            </li>
                        </ul>
                        <h3 className={cx('title')}>Support</h3>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#!">Help center</a>
                            </li>
                            <li>
                                <a href="#!">Help center</a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 4 */}

                    <div className={cx('column')}>
                        <h3 className={cx('title')}>Stay In Touch</h3>
                        <div className={cx('social-footer')}>
                            <a href="!#">
                                <img src={images.facebook} alt="" />
                            </a>
                            <a href="!#">
                                <img src={images.instagram} alt="" />
                            </a>
                            <a href="!#">
                                <img src={images.linked} alt="" />
                            </a>
                            <a href="!#">
                                <img src={images.twitter} alt="" />
                            </a>
                        </div>
                        <h3 className={cx('title')}>Subcribe</h3>
                        <p className={cx('desc')}>
                            Subscribe our newsletter for the latest update of Products in store.
                        </p>

                        <div className={cx('email')}>
                            <input type="text" placeholder="Enter your email" />
                            <Button outline large>
                                Subcribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx('copy-right')}>
                    <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
