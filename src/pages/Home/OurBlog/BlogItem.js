import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './OurBlog.module.scss';

const cx = classNames.bind(styles);

function BlogItem({ date, desc, src }) {
    return (
        <div className={cx('item')}>
            <a href="#!">
                <img className={cx('thumb')} alt="" src={src} />
            </a>
            <div className={cx('info')}>
                <span className={cx('date')}>{date}</span>

                <h3 className={cx('title')}>
                    <a href="#!">{desc}</a>
                </h3>

                <Button outline className={cx('btn')}>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default BlogItem;
