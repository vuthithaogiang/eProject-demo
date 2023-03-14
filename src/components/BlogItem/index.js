import classNames from 'classnames/bind';
import styles from './BlogItem.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function BlogItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a href="#!">
                <img className={cx('thumb')} alt="" src={data.src} />
            </a>
            <div className={cx('info')}>
                <span className={cx('date')}>{data.date}</span>

                <h3 className={cx('title')}>
                    <a href="#!">{data.desc}</a>
                </h3>

                <Button outline className={cx('btn')}>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default BlogItem;
