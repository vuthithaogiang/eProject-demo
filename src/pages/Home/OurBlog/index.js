import classNames from 'classnames/bind';
import ListBlogItem from '~/components/ListBlogItem';
import styles from './OurBlog.module.scss';

const cx = classNames.bind(styles);

function OurBlog({ className }) {
    return (
        <div className={cx('wrapper', { className })}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Our blog</h1>
                    <p className={cx('desc')}>
                        I embarked on a new journey of collecting and recording the endless stream of memories and
                        moments of our life. In words, and images.
                    </p>
                </div>
            </div>
            <ListBlogItem />
        </div>
    );
}

export default OurBlog;
