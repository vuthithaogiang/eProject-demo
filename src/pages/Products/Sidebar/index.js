import classNames from 'classnames/bind';
import styles from '~/pages/Products/Products.module.scss';
import Filter from './Filter';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container-sidebar')}>
            <div className={cx('filter')}>
                <h3 className={cx('titkle')}>Genres</h3>
                <Filter />
            </div>
        </div>
    );
}

export default Sidebar;
