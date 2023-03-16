import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faHome,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../../Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

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
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
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
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    // const currentUser = false;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                console.log(menuItem);

                break;
            default:
                console.log('Error handle!');
                break;
        }
    };
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
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Home" placement="bottom">
                                <Link to="/" className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </Tippy>

                            <Tippy content="Products" placement="bottom">
                                <Link to="/products" className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faProductHunt} />
                                </Link>
                            </Tippy>

                            <Tippy content="Badget" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    {/* <span className={cx('badge')}>12</span> */}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className={cx('list-btn')}>
                                <Link text className={cx('btn-item')} to="/">
                                    Home
                                </Link>
                                <Link text className={cx('btn-item')} to="/products">
                                    Products
                                </Link>
                                <Button text className={cx('btn-item')}>
                                    Pricing
                                </Button>
                                <Button text className={cx('btn-item')}>
                                    Reviews
                                </Button>
                            </div>

                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://i.pinimg.com/236x/6e/8e/9c/6e8e9cb32645250bba9c875636dc882a.jpg"
                                className={cx('user-avatar')}
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
