import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Introduction from './Introduction';

import PopularProducts from './PopularProducts';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Introduction />
            <PopularProducts />
        </div>
    );
}

export default Home;
