import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Introduction from './Introduction';

import PopularProducts from './PopularProducts';
import Client from './Client';
import Feedback from './Feedback';
import Feature from './Feature';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Introduction />
            <Client />
            <PopularProducts />
            <Feedback />
            <Feature />
        </div>
    );
}

export default Home;
