import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Introduction from './Introduction';

import PopularProducts from './PopularProducts';
import Client from './Client';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Introduction />
            <Client />
            <PopularProducts />
        </div>
    );
}

export default Home;
