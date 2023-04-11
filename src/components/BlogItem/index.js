import classNames from 'classnames/bind';
import styles from './BlogItem.module.scss';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function BlogItem({ data }) {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <a href="#!">
                <img className={cx('thumb')} alt="" src={data.src} />
            </a>
            <div className={cx('info')}>
                <span className={cx('date')}>{data.date}</span>

                <h3 className={cx('title')}>{data.desc}</h3>

                <Button onClick={() => navigate('/blog/item')} outline className={cx('btn')}>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default BlogItem;
