import classNames from 'classnames/bind';
import styles from './PopularProducts.module.scss';
import Product from './Product';
import { useState } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PopularProducts() {
    const numberPages = 3;
    const style = (node, styles) => Object.keys(styles).forEach((key) => (node.style[key] = styles[key]));
    const [countNext, setCountNext] = useState(0);

    // useEffect(() => {
    //     setCount((prev) => prev + 1);
    // }, [count]);
    if (countNext === numberPages - 1 || countNext < 0) {
        setCountNext(0);
    }

    const handleNextList = () => {
        setCountNext(countNext + 1);
    };
    // console.log(countNext);

    const handlePrevious = () => {
        setCountNext(countNext - 1);
    };

    if (countNext === 1) {
        const item = document.querySelector('.list-item');
        style(item, {
            transform: 'translateX(-100%)',
            transition: 'all ease 0.3s',
            marginLeft: '-15px',
        });
    }

    if (countNext > 1) {
        const item = document.querySelector('.list-item');
        style(item, {
            transform: 'translateX(-200%)',
            transition: 'all ease 0.3s',

            marginLeft: '-15px',
        });
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <div className={cx('content-body')}>
                        <h1 className={cx('heading')}>Our Popular Product</h1>
                        <p className={cx('desc')}>
                            You’ll find a number of designs in our range that are sure to look great in any room
                        </p>
                    </div>

                    <div className={cx('actions-btn')}>
                        <Button
                            onClick={handleNextList}
                            outline
                            rounded
                            className={cx('btn-more')}
                            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                        >
                            More
                        </Button>
                    </div>
                </div>

                <div className={cx('list')}>
                    <Product className={cx('list-item')} />
                </div>
            </div>
        </div>
    );
}

export default PopularProducts;
