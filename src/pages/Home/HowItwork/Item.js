import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './HowItWork.module.scss';

const cx = classNames.bind(styles);

function Item ({icon , title, desc}) {
    return (
        <div className={cx('item')}>
            <img className={cx('icon')} src={icon} alt=""/>
            <h3 className={cx('heading')}>{title}</h3>
            <p className={cx('desc')}>{desc}</p>
            <Button text className={cx('btn')}>Learn More</Button>

        </div>
    )

}

export default Item;