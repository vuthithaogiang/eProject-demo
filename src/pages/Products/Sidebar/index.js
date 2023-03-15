import classNames from 'classnames/bind';
import styles from '~/pages/Products/Products.module.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    return <div className={cx('container-sidebar')}>side bar</div>;
}

export default Sidebar;
