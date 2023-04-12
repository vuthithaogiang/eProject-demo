import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faHome,
    faUser,
    faGear,
    faSignOut,
    faBars,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../../Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '~/contexts/CartContext';
import React, { useContext } from 'react';
import { PRODUCTS } from '~/data/product';
import AuthContext from '~/contexts/AuthProvider';

const cx = classNames.bind(styles);

const MENU_MOBILE = [
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title: 'Home',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faProductHunt} />,
        title: 'Products',
        to: '/products/all',
    },
    {
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Budget',
        to: '/cart',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/',
        separate: true,
    },
];

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        // sub menu cap 2
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'About Us',
        to: '/about-us',
    },

    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const { auth, currentAccount, paySuccess } = useContext(AuthContext);
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                console.log(menuItem);

                break;
            // case 'logout':
            //     setCurrentAccount(false);
            //     break;

            default:
                // setCurrentAccount(false);
                console.log('Error handle!');
                break;
        }
    };

    const { cartItems } = useContext(CartContext);

    console.log(currentAccount);

    let avatarUrl;

    if (auth.picture !== '') {
        avatarUrl = auth.picture;
    } else {
        avatarUrl = 'https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/avatar-placeholder.webp';
    }

    let countItem = 0;
    PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
            countItem += 1;
        }
        return countItem;
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}

                <Link to="/" className={cx('logo-link')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Mirrors." />
                        <span className={cx('title-logo')}>Mirrors.</span>
                    </div>
                </Link>

                {/* search-bar */}
                <div className={cx('search-bar')}>
                    {' '}
                    <Search />
                </div>

                <div className={cx('actions')}>
                    <>
                        <Tippy delay={[0, 200]} content="Home" placement="bottom">
                            <Link to="/" className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </Tippy>

                        <Tippy content="Products" placement="bottom">
                            <Link to="/products/all" className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faProductHunt} />
                            </Link>
                        </Tippy>

                        <Tippy content="Badget" placement="bottom">
                            <Link to="/cart" className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                {countItem > 0 && <span className={cx('badge')}>{countItem}</span>}
                            </Link>
                        </Tippy>

                        {currentAccount === false && (
                            <Button to={'/login'} primary small className={cx('btn-login')}>
                                Log in
                            </Button>
                        )}
                    </>

                    {currentAccount && (
                        <>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <img src={avatarUrl} className={cx('user-avatar')} alt="" />
                            </Menu>
                        </>
                    )}

                    {currentAccount === false && (
                        <>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>

                <div className={cx('mobile')}>
                    <Menu items={MENU_MOBILE} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
