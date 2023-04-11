import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './HowItWork.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ icon, title, desc }) {
    const navigate = useNavigate();
    return (
        <div className={cx('item')}>
            <img className={cx('icon')} src={icon} alt="" />
            <h3 className={cx('heading')}>{title}</h3>
            <p className={cx('desc')}>{desc}</p>
            <Button onClick={() => navigate('/purchase-protection')} text className={cx('btn')}>
                Learn More
            </Button>
        </div>
    );
}

export default Item;
